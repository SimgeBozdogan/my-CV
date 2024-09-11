import fs from 'fs';
import path from 'path';
import '../styles/globals.css';

// Sunucu tarafında JSON dosyasını yükleme
async function loadData() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export default async function Home() {
  let data;
  try {
    data = await loadData(); // JSON verisini yüklüyoruz
    console.log('Veri yüklendi:', data);
  } catch (error) {
    console.error('Veri yüklenemedi:', error);
    data = null;
  }

  if (!data) {
    return <div>Veri yüklenemedi. Lütfen JSON dosyasını kontrol edin.</div>;
  }

  const { profile, education, experience, skills, certifications, projects, languages } = data;

  return (
    <div className="cv-container">
      <div className="left-column">
        <img src="/profile.jpg" alt="Profile" className="profile-picture" />
        <h1>{profile.name}</h1>
        {/* Full-Stack Developer başlığını siyah yapıyoruz */}
        <h2 style={{ color: 'black' }}>{profile.title}</h2>

        <section className="contact">
          <h3>Contact</h3>
          <p>{profile.bio}</p>
          {/* Çizgi ekleniyor */}
          <hr style={{ margin: '20px 0', border: '1px solid #ccc' }} />
          <p><b>Email:</b> <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a></p>
          <p><b>Phone:</b> {profile.contact.phone}</p>
          <p><b>Address:</b> {profile.contact.address}</p>
          <p><b>LinkedIn:</b> <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">{profile.contact.linkedin}</a></p>
          <p><b>GitHub:</b> <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">{profile.contact.github}</a></p>
        </section>

        <section className="education">
          <h3>Education</h3>
          <p><b>{education.school}</b></p>
          <p>{education.degree} ({education.period})</p>
        </section>

        <section className="languages">
          <h3>Languages</h3>
          <p>{languages.language}: {languages.level}</p>
        </section>
      </div>

      <div className="right-column">
        <section className="experience">
          <h3>Experience</h3>
          {experience.map((exp, index) => (
            <div key={index}>
              <h4>{exp.role}</h4>
              {/* Şirket ismini siyah renkte yazıyoruz */}
              <p style={{ color: 'black' }}>{exp.location}</p> 
              <p>{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        <section className="skills">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="certifications">
          <h3>Certifications</h3>
          <ul>
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        <section className="projects">
          <h3>Projects</h3>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
