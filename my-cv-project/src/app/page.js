import React from 'react';
import Head from 'next/head'; 
import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>G. Simge BOZDOĞAN - Full-Stack Developer</title> 
        <meta name="description" content="G. Simge BOZDOĞAN'ın CV'si, Full-Stack Developer olarak deneyimleri ve yetenekleri." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <div className="cv-container">
        <div className="left-column">
          <img src="/profile.jpg" alt="Profile" className="profile-picture" />
          <h1>G. Simge BOZDOĞAN</h1>
          <h2>Full-Stack Developer</h2>

          <section className="contact">
            <h3>Contact</h3>
            <p>
              I am a software developer who enjoys and is curious about Full-Stack Development. I feel ready and excited for new and developing experiences by using the knowledge I've gained from education and experience. I am aware of the value I can add to a company and continue to improve myself to increase this value.
            </p>
            <hr style={{ marginTop: '20px', marginBottom: '20px', border: '1px solid #ccc' }} />
            <p><b>Email:</b> <a href="mailto:Simge.bzdgn@gmail.com">Simge.bzdgn@gmail.com</a></p>
            <p><b>Phone:</b> 507 868 90 28</p>
            <p><b>Address:</b> Beşiktaş/İstanbul</p>
            <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/gulsumsimgebozdogan" target="_blank">www.linkedin.com/in/gulsumsimgebozdogan</a></p>
            <p><b>GitHub:</b> <a href="https://github.com/SimgeBozdogan" target="_blank">github.com/SimgeBozdogan</a></p>
          </section>

          <section className="education">
            <h3>Education</h3>
            <p><b>Akdeniz University</b></p>
            <p>Bachelor of Computer Engineering (09/2017 - 01/2024)</p>
          </section>

          <section className="languages">
            <h3>Languages</h3>
            <p>English: B1</p>
          </section>
        </div>

        <div className="right-column">
          <section className="experience">
            <h3>Experience</h3>
            <div>
              <h4>Full-Stack Intern at Ural Telekom</h4>
              <p>Antalya (June 2022 - Nov 2022)</p>
              <p>During my internship, I played an important role in the success of Eyecheckup Web by creating the admin panel of the company's Eyecheckup project with React.js. I also contributed to the backend using Spring Boot. Technologies used: React.js, Vue.js, jQuery, HTML, CSS, Tailwind, AWS, Postgresql, WordPress, Swagger.</p>
            </div>
            <div>
              <h4>Java Developer Intern at Evant Teknoloji</h4>
              <p>Adana (June 2021 - July 2021)</p>
              <p>Developed a web-based application using Spring Boot, created a CRUD application that performs database operations, wrote RESTful APIs, added a security layer, wrote unit tests, and generated API documentation using the Swagger tool.</p>
            </div>
          </section>

          <section className="skills">
            <h3>Skills</h3>
            <ul>
              <li>Java, Spring Boot, HTML5, CSS, SCSS, JavaScript, TypeScript, React.js, Node.js, C#, MVC</li>
              <li>PostgreSQL, MongoDB</li>
              <li>Bootstrap, Git, JavaScript Libraries</li>
              <li>Modern Web Development, Responsive Design, Cross-Browser Compatibility, SEO Best Practices</li>
            </ul>
          </section>

          <section className="certifications">
            <h3>Certifications</h3>
            <ul>
              <li>Fimple React Bootcamp</li>
              <li>Women in Tech: Inspiring Women Stories 2024</li>
              <li>The Complete 2022 Web Development Bootcamp (Udemy)</li>
            </ul>
          </section>

          <section className="projects">
            <h3>Projects</h3>
            <ul>
              <li><b>Book Research Website:</b> Using HTML, CSS, React.js</li>
              <li><b>Drag-and-Drop Website:</b> A web application using HTML5, SCSS, CSS, Vue.js, JavaScript, Express.js</li>
              <li><b>Football Players Evaluation Website:</b> A web app using Spring Boot and React for comparing football players with performance metrics and visual insights</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
