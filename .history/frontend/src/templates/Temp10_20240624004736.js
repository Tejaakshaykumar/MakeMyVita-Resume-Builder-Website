import React from "react";
import "./temp2.css";
import image from "../images/nitwlogo.png";

const Temp2 = () => {
  return (
    <div className="resume" id="resume">
      <header className="header">
        <div className="top-left">
          <div className="image">
            <img src={image} alt="NITW Logo"></img>
          </div>
          <div className="myself">
            <h1>Jane Doe</h1>
            <p>Roll No.: 21CSB0A20</p>
            <p>Bachelor of Technology</p>
            <p>Computer Science and Engineering</p>
            <p>National Institute Of Technology, Warangal</p>
          </div>
        </div>
        <div className="top-right">
          <p>📞 +91-9000000000</p>
          <p>✉️ jane.doe@example.com</p>
          <p>✉️ jd21csb0a20@student.nitw.ac.in</p>
          <p>GitHub: jane-doe</p>
          <p>LinkedIn: Jane Doe</p>
        </div>
      </header>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li className="edu">
            <div className="l">
              <strong>National Institute of Technology, Warangal</strong>
              <p>BTech in Computer Science and Engineering</p>
            </div>
            <div className="r">
              <p>2021-present </p>
              <p> CGPA: 9.30</p>
            </div>
          </li>
          <li className="edu">
            <div className="l">
              <strong>Sunrise Public School</strong>
              <p>Class XII, CBSE</p>
            </div>
            <div className="r">
              <p>2021 </p>
              <p> Percentage: 96.5%</p>
            </div>
          </li>
          <li className="edu">
            <div className="l">
              <strong>Springdale High School</strong>
              <p>Class X, CBSE</p>
            </div>
            <div className="r">
              <p>2019 </p>
              <p> Percentage: 97.8%</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="education">
        <h2>Courses</h2>
        <ul>
          <li>Machine Learning</li>
          <li>Artificial Intelligence</li>
          <li>Computer Networks</li>
          <li>Operating Systems</li>
        </ul>
      </section>

      <section className="education">
        <h2>Technical Skills</h2>
        <ul>
          <li>
            <strong>Programming:</strong> Python, JavaScript, SQL
          </li>
          <li>
            <strong>Development:</strong> React, Node.js, Express
          </li>
        </ul>
      </section>

      <section className="education">
        <h2>Competitive Programming</h2>
        <ul>
          <li>
            <strong>Codeforces:</strong> Highest Rating: 1700 (Expert) - jane_doe
          </li>
          <li>
            <strong>Codechef:</strong> Highest Rating: 1800 (4 STAR) - jane_doe11
          </li>
          <li>
            <strong>Leetcode:</strong> Highest Rating: 2000 (Knight) - Jane_Doe
          </li>
          <li>
            <strong>Global Rank 50</strong> in Codechef Starters 100 (Div 4) - 1 May, 2023
          </li>
        </ul>
      </section>

      <section className="education">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Real-time Chat Application</strong> (March, 2023)
            <p>Developed a real-time chat application using React and Firebase</p>
            <p>
              Implemented real-time messaging with Firebase Firestore. Added user authentication and chat room functionalities. For more details, check out the <a href="#">project link</a>.
            </p>
          </li>
          <li>
            <strong>Weather Forecasting System</strong> (July, 2023)
            <p>
              Created a weather forecasting system using Node.js and OpenWeatherMap API
            </p>
            <p>
              Users can get real-time weather data and forecasts for any location. For more information, click <a href="#">here</a>.
            </p>
          </li>
        </ul>
      </section>

      <section className="education">
        <h2>Achievements</h2>
        <ul>
          <li>Institute Merit Scholarship, NITW (2022-2023)</li>
          <li>JEE MAIN AIR 1500 and JEE Advance AIR 4000 (2021)</li>
          <li>Qualified KVPY examination with AIR 1500 (2020-2021)</li>
          <li>District Topper in Class X and XII (2019, 2021)</li>
        </ul>
      </section>

      <section className="education">
        <h2>Positions of Responsibility</h2>
        <ul>
          <li>Executive member of Coding Club, NITW (2022-present)</li>
          <li>
            Executive member of Cultural Committee (2022-present)
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Temp2;
