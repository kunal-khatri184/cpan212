const express = require('express');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const fetch = require('node-fetch');
const upload = require('../middleware/upload');

const router = express.Router();
const UPLOAD_DIR = path.join(__dirname, '../uploads');

// Route: Upload multiple images
router.post('/upload', upload.array('images', 10), (req, res) => {
  res.json({ message: 'Images uploaded successfully', files: req.files });
});

// Route: Get up to 3 random images
router.get('/random-images', (req, res) => {
  fs.readdir(UPLOAD_DIR, (err, files) => {
    if (err) return res.status(500).send('Error reading uploads directory');
    const randomImages = _.sampleSize(files, 3).map(file => `/uploads/${file}`);
    res.json(randomImages);
  });
});

// Route: Upload a random dog image from dog.ceo
router.post('/upload-dog', async (req, res) => {
  const { imageUrl } = req.body;
  const fileName = `${Date.now()}-dog.jpg`;
  const filePath = path.join(UPLOAD_DIR, fileName);

  try {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    fs.writeFile(filePath, Buffer.from(buffer), () => {
      res.json({ message: 'Dog image uploaded successfully', file: `/uploads/${fileName}` });
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to download and save dog image' });
  }
});

module.exports = router;
