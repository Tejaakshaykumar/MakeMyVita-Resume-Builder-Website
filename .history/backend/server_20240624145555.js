require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

const router=require('./routes/auth-router');
const resume=require('./routes/ResumeRoutes');
const personal=require('./routes/PersonalDetailsRoutes');
const education=require('./routes/EducationDetailsRoutes');
const project= require('./routes/ProjectDetailsRoutes');
const experience= require('./routes/ExperienceDetailsRoutes');
const course= require('./routes/CourseDetailsRoutes');
const skill=require('./routes/SkillDetailsRoutes');
const firebase=require('./routes/firebaseRoutes');
const student=require('./routes/StudentDetailsRoutes');
const additonal=require('./routes/AdditionalDetailsRoutes')

const corsOptions = {
    origin:["http://localhost:3000",""],
    methods:"GET,PUT,POST,DELETE,PATCH,HEAD",
    credentials:true,
};

app.use(cors(corsOptions));
app.use(express.json());

connectDB();

app.use('/api/auth',router);
app.use('/api/firebase', firebase);
app.use('/api/resumes', resume);
app.use('/api/personalDetails', personal);
app.use('/api/educationDetails', education);
app.use('/api/projectDetails',project );
app.use('/api/experienceDetails',experience );
app.use('/api/courseDetails',course );
app.use('/api/skillDetails', skill);
app.use('/api/studentDetails',student);
app.use('/api/additonalDetails',additonal);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
