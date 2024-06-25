require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const router=require('./routes/auth-router')
const resume=require('./routes/ResumeRoutes')
const personal=require('./routes/PersonalDetailsRoutes')
const education=require('./routes/EducationDetailsRoutes')
const project require('./routes/ProjectDetailsRoutes'));
const ls', require('./routes/ExperienceDetailsRoutes'));
const  require('./routes/CourseDetailsRoutes'));
const require('./routes/SkillDetailsRoutes'));

const corsOptions = {
    origin:"http://localhost:3000",
    methods:"GET,PUT,POST,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOptions));
app.use(express.json());

connectDB();

app.use('/api/auth',router);
app.use('/api/resumes', resume);
app.use('/api/personalDetails', personal);
app.use('/api/educationDetails', education);
app.use('/api/projectDetails', require('./routes/ProjectDetailsRoutes'));
app.use('/api/experienceDetails', require('./routes/ExperienceDetailsRoutes'));
app.use('/api/courseDetails', require('./routes/CourseDetailsRoutes'));
app.use('/api/skillDetails', require('./routes/SkillDetailsRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
