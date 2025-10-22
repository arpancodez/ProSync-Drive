const File = require('../models/File');
const Folder = require('../models/Folder');

// Upload file
exports.uploadFile = async (req, res) => {
  try {
    const { name, folderId, size, mimeType, path } = req.body;
    const userId = req.userId;

    // Verify folder ownership if folderId provided
    if (folderId) {
      const folder = await Folder.findOne({ _id: folderId, owner: userId });
      if (!folder) {
        return res.status(404).json({ message: 'Folder not found' });
      }
    }

    const file = new File({
      name,
      owner: userId,
      folder: folderId || null,
      size,
      mimeType,
      path,
    });

    await file.save();
    res.status(201).json({ message: 'File uploaded successfully', file });
  } catch (error) {
    console.error('Upload file error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all files for user
exports.getFiles = async (req, res) => {
  try {
    const userId = req.userId;
    const { folderId } = req.query;

    const query = { owner: userId };
    if (folderId) {
      query.folder = folderId;
    } else {
      query.folder = null; // Root level files
    }

    const files = await File.find(query).sort({ createdAt: -1 });
    res.json(files);
  } catch (error) {
    console.error('Get files error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get single file
exports.getFile = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const file = await File.findOne({ _id: id, owner: userId });
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    res.json(file);
  } catch (error) {
    console.error('Get file error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete file
exports.deleteFile = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const file = await File.findOneAndDelete({ _id: id, owner: userId });
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete file error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Rename file
exports.renameFile = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const userId = req.userId;

    const file = await File.findOneAndUpdate(
      { _id: id, owner: userId },
      { name },
      { new: true }
    );

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    res.json({ message: 'File renamed successfully', file });
  } catch (error) {
    console.error('Rename file error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
