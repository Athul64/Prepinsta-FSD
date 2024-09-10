const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3200;
const app = express();
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable CORS for all origins

const MONGO_URI='mongodb+srv://athul:mongodb%40athul@cluster0.rupdk.mongodb.net/food-nutrition?retryWrites=true&w=majority&appName=Cluster0';

// MongoDB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Food Model (Schema)
const foodSchema = new mongoose.Schema({
  foodItemName: { type: String, required: true },
  foodGroup: { type: String, required: true },
  description: { type: String },
  nutritionalInformation: {
    calories: Number,
    macronutrients: {
      protein: Number,
      fats: Number,
      carbohydrates: Number,
    },
    micronutrients: {
      vitamins: [String],
      minerals: [String],
    },
    fiber: Number,
    sodium: Number,
    cholesterol: Number,
  },
  servingSize: { type: String },
  allergens: [String],
  ingredients: [String],
  preparationMethods: [String],
  certifications: [String],
  countryOfOrigin: { type: String },
  brandOrManufacturer: { type: String },
  dietaryRestrictions: [String],
  healthBenefits: { type: String },
  bestPractices: { type: String }
});

const Food = mongoose.model('Food', foodSchema);

// Routes
app.get('/test', (req, res) => {
  res.send('Server is working!');
});

app.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/foods', async (req, res) => {
  try {
    const data = req.body;

    if (Array.isArray(data)) {
      const savedFoods = await Food.insertMany(data);
      res.status(201).json(savedFoods);
    } else {
      const newFood = new Food(data);
      const savedFood = await newFood.save();
      res.status(201).json(savedFood);
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

app.get('/api/foods/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ message: 'Food item not found' });
    res.json(food);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

app.put('/api/foods/:id', async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFood) return res.status(404).json({ message: 'Food item not found' });
    res.json(updatedFood);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

app.delete('/api/foods/:id', async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);
    if (!deletedFood) return res.status(404).json({ message: 'Food item not found' });
    res.json({ message: 'Food item deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
