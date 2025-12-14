const mongoose = require('mongoose');

const AssemblySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, enum: ['assembly', 'sub-assembly', 'kit'], required: true },
    notes: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Assembly', AssemblySchema);
