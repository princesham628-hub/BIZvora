const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'BizVora API is running' });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
