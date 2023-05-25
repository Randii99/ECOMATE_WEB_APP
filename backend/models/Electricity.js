const mongoose = require('mongoose');
//const router = require('../routes/packages');



//Create Database Scheams
const ElectricitySchema = new mongoose.Schema({
    pannelSize: {
      type: Number,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    intensity: {
      type: Number,
      required: true
    },
    monthlyBill: {
      type: Number,
      required: true
    },
    units: {
      type: Number,
      required: true
    },
    irradiance: {
      type: Number,
      default: 0.05
    },
    conversionEfficiency: {
      type: Number,
      default: 0.08
    },
    monthlyGeneratedElectricity: {
        type: Number
        
      },
      
      
  });
//Create a module for connect with scheama
const Electricity = mongoose.model("Electricity",ElectricitySchema);

module.exports=Electricity;