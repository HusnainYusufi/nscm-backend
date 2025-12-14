const mongoose = require('mongoose');

const SetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String },
    materialSpecs: { type: String },
    assemblies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assembly' }]
  },
  { _id: false }
);

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    code: { type: String, required: true, unique: true, trim: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'ProjectCategory', required: true },
    type: { type: String, enum: ['special', 'conventional'], required: true },
    shortDescription: { type: String },
    sets: [SetSchema],
    structures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Structure' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
