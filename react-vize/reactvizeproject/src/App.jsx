import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      {/* Kişisel Bilgiler */}
      <div style={{ marginBottom: "20px" }}>
        <h1>Dilara Şahin</h1>
        <p>Email: dilarasahin06@icloud.com</p>
        <p>Telefon: +90 545 210 5218</p>
      </div>

      {/* Eğitim Bilgileri */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Eğitim Bilgileri</h2>
        <p>Üniversite:Kapadokya Üniversitesi</p>
        <p>Bölüm: Bilgisayar Programcılığı</p>
        <p>Mezuniyet Yılı: 2025</p> 
      </div>

      {/* İş Deneyimi */}
      <div style={{ marginBottom: "20px" }}>
        <h2>İş Deneyimi</h2>
        <p>Şirket: Örnek Şirket</p>
        <p>Pozisyon: Yazılım Geliştirici</p>
        <p>Çalışma Süresi:2023-2025</p>
      </div>

      {/* Yetenekler */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Yetenekler</h2>
        <ul>
          <li>Python</li>
          <li>Veri tabanı</li>
          <li>Node.js</li>
        </ul>
      </div>

      {/* Hobiler ve İlgi Alanları */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Hobiler ve İlgi Alanları</h2>
        <p>Gezmek,Alışveriş yapmak</p>
      </div>

      {/* Sosyal Medya */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Sosyal Medya</h2>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px" }}
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px" }}
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>

  
  );
}

export default App;
