const mongoose = require('mongoose');

const personalDetailsSchema = new mongoose.Schema({
    firstName: { type: String,  },
    lastName: { type: String,  },
    professionalEmail: { type: String,  },
    personalEmail: { type: String },
    role: { type: String },
    phone: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    website: { type: String },
    linkedin: { type: String },
    github: { type: String },
    imageUrl: { type:  }
});

module.exports = mongoose.model('PersonalDetails', personalDetailsSchema);
