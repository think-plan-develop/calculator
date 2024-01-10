import mongoose from 'mongoose';

const calculatorSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true,
  },
  output: {
    type: String,
    default: '',
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  }
});

calculatorSchema.pre('save', function (next) {
    this.updated = new Date();
    next();
  });

const Calculator = mongoose.model('Calculator', calculatorSchema);

export default Calculator;
