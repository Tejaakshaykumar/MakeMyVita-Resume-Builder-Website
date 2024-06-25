const express = require('express');
const router = express.Router();

const PersonalDetails = require('../models/PersonalDetails');
const EducationDetails = require('../models/EducationDetails');
const Skills = require('../models/Skills');
const Experience = require('../models/Experience');
const Projects = require('../models/Projects');

router.post('/personal-details', async (req, res) => {
  try {
    const personalDetails = new PersonalDetails(req.body);
    await personalDetails.save();
    res.status(201).send(personalDetails);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/education-details', async (req, res) => {
  try {
    const educationDetails = new EducationDetails(req.body);
    await educationDetails.save();
    res.status(201).send(educationDetails);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/skills', async (req, res) => {
  try {
    const skills = new Skills(req.body);
    await skills.save();
    res.status(201).send(skills);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/experience', async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).send(experience);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/projects', async (req, res) => {
  try {
    const projects = new Projects(req.body);
    await projects.save();
    res.status(201).send(projects);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
