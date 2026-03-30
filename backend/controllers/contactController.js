const Contact = require('../models/Contact');

const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Message received! We will get back to you soon.',
      data: contact,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, error: errors.join(', ') });
    }
    res.status(500).json({ success: false, error: 'Server error. Please try again later.' });
  }
};

module.exports = { submitContact };
