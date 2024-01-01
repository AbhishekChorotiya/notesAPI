const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const basicAuth = require('express-basic-auth');
const Note = require('../modles/notes')
const db = require('../db/db')


const app = express();

app.use(bodyParser.json());


const users = {
  'admin': 'admin', 
};

app.use(basicAuth({
  users,
  challenge: true,
  unauthorizedResponse: 'Unauthorized Access',
}));

// Validation middleware
const validateNote = [
  check('title').trim().notEmpty().withMessage('Title cannot be empty').isLength({ max: 255 }).withMessage('Title is too long'),
  check('content').trim().notEmpty().withMessage('Content cannot be empty'),
];


// Create Note
app.post('/notes', validateNote, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, content } = req.body;
    const newNote = await Note.create({ title, content });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve Notes
app.get('/notes', async (req, res) => {
  try {
    const allNotes = await Note.find();
    res.status(200).json(allNotes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve Single Note by ID
app.get('/notes/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).json({ error: 'Note not found' });
      return;
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update Note
app.put('/notes/:id', validateNote, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedNote) {
      res.status(404).json({ error: 'Note not found' });
      return;
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete Note
app.delete('/notes/:id', async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      res.status(404).json({ error: 'Note not found' });
      return;
    }
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Error handling for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app