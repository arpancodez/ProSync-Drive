const Folder = require('../models/Folder');
const File = require('../models/File');

// Create folder
exports.createFolder = async (req, res) => {
  try {
    const { name, parentId } = req.body;
    const userId = req.userId;

    // Verify parent folder ownership if parentId provided
    if (parentId) {
      const parent = await Folder.findOne({ _id: parentId, owner: userId });
      if (!parent) {
        return res.status(404).json({ message: 'Parent folder not found' });
      }
    }

    const folder = new Folder({
      name,
      owner: userId,
      parent: parentId || null,
    });

    await folder.save();
    res.status(201).json({ message: 'Folder created successfully', folder });
  } catch (error) {
    console.error('Create folder error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all folders
exports.getFolders = async (req, res) => {
  try {
    const userId = req.userId;
    const { parentId } = req.query;

    const query = { owner: userId };
    if (parentId) {
      query.parent = parentId;
    } else {
      query.parent = null; // Root level folders
    }

    const folders = await Folder.find(query).sort({ createdAt: -1 });
    res.json(folders);
  } catch (error) {
    console.error('Get folders error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete folder
exports.deleteFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const folder = await Folder.findOneAndDelete({ _id: id, owner: userId });
    if (!folder) {
      return res.status(404).json({ message: 'Folder not found' });
    }

    // Delete all files in the folder
    await File.deleteMany({ folder: id, owner: userId });

    res.json({ message: 'Folder deleted successfully' });
  } catch (error) {
    console.error('Delete folder error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
