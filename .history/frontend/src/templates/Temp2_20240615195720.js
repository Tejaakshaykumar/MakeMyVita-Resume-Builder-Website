import React from 'react';
import './temp2.css';

const Temp2 = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Dhyey Gokani</h1>
        <p>Roll No.: 21CSB0A19</p>
        <p>Bachelor of Technology</p>
        <p>Computer Science and Engineering</p>
        <p>National Institute Of Technology, Warangal</p>
        <div className="contact">
          <p>📞 +91-8347087029</p>
          <p>✉️ dhyeygokani2312@gmail.com</p>
          <p>✉️ gd21csb0a19@student.nitw.ac.in</p>
          <p>GitHub: Dhyeygokani</p>
          <p>LinkedIn: Dhyey Gokani</p>
        </div>
      </header>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>National Institute of Technology, Warangal</strong>
            <p>BTech in Computer Science and Engineering</p>
            <p>2021-present | CGPA: 9.24</p>
          </li>
          <li>
            <strong>National Institute of Technology, Warangal</strong>
            <p>Minor Degree in Management</p>
            <p>2022-present</p>
          </li>
          <li>
            <strong>Modi School</strong>
            <p>Class XII, GHSEB (Gujarat State Board)</p>
            <p>2021 | Percentile Rank: 99.98</p>
          </li>
          <li>
            <strong>G.T. Sheth School</strong>
            <p>Class X, GHSEB (Gujarat State Board)</p>
            <p>2019 | Percentile Rank: 99.99</p>
          </li>
        </ul>
      </section>

      <section className="courses">
        <h2>Courses</h2>
        <ul>
          <li>Data Structures</li>
          <li>Object Oriented Programming (JAVA)</li>
          <li>Design and Analysis of Algorithm</li>
          <li>Database Management System (DBMS)</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Programming:</strong> C++, JAVA, SQL</li>
          <li><strong>Development:</strong> HTML, CSS, Django (Back end)</li>
        </ul>
      </section>

      <section className="competitive-programming">
        <h2>Competitive Programming</h2>
        <ul>
          <li><strong>Codeforces:</strong> Highest Rating: 1606 (Expert) - dhyey_gokani</li>
          <li><strong>Codechef:</strong> Highest Rating: 1862 (4 STAR) - dhyey_gokani11</li>
          <li><strong>Leetcode:</strong> Highest Rating: 1950 (Knight) - Dhyey_Gokani</li>
          <li><strong>Global Rank 61</strong> in Codechef Starters 76 (Div 4) - 1 Feb, 2023</li>
          <li><strong>Global Rank 473</strong> in Leetcode Biweekly 100 - 18 March, 2023</li>
          <li><strong>Global Rank 481</strong> in Codeforces Round 878 (Div 3) - 6 June, 2023</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Database for UPI Payment</strong> (April, 2023)
            <p>DBMS group project developed using SQL</p>
            <p>Designed an entity-relationship (ER) model and corresponding relational model. Database containing important data regarding bank accounts, UPI users, transactions, merchants, and numerous services such as ticket booking, bill payment, and more. For more details checkout here</p>
          </li>
          <li>
            <strong>E-Commerce Website: One-Click Pick</strong> (June, 2023)
            <p>E-commerce website developed using HTML, CSS, Bootstrap, and Django</p>
            <p>Shopping section allows users to browse a variety of products, place orders, and track their orders. The blog section allows users to express their thoughts by writing blogs. For more information click here</p>
          </li>
        </ul>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>Institute Merit Scholarship, NITW (2022-2023)</li>
          <li>JEE MAIN AIR 1278 and JEE Advance AIR 3482 (2021)</li>
          <li>Qualified KVPY examination with AIR 1340 (2020-2021)</li>
          <li>Gujarat 1st in Class X and 2nd in Class XII (2019, 2021)</li>
        </ul>
      </section>

      <section className="responsibility">
        <h2>Positions of Responsibility</h2>
        <ul>
          <li>Executive member of FINVIZ club, NITW (2022-present)</li>
          <li>Executive member of Dance and Dramatics (DND) club (2022-present)</li>
        </ul>
      </section>
    </div>
  );
};

export default Temp2;
