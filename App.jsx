import React, { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Beautiful Tour Inn",
      subtitle: "Your Private Gateway to Shanghai & Beyond",
      hero: "Exclusive Road Trip Experience",
      description: "Discover the hidden gems of Shanghai and its surrounding regions with our premium road trip service. Experience luxury, comfort, and adventure like never before.",
      features: [
        "Luxury Vehicle Fleet",
        "Professional Bilingual Guides",
        "Customized Itineraries",
        "Premium Accommodations"
      ],
      cta: "Book Your Adventure",
      contact: "Contact Us"
    },
    zh: {
      title: "丽游驿",
      subtitle: "您的上海及周边私人旅行门户",
      hero: "专属公路旅行体验",
      description: "通过我们的高端公路旅行服务，探索上海及其周边地区的隐藏宝藏。体验前所未有的奢华、舒适和冒险。",
      features: [
        "豪华车队",
        "专业双语导游",
        "定制行程",
        "高端住宿"
      ],
      cta: "预订您的冒险",
      contact: "联系我们"
    }
  };

  const currentContent = content[language];

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>{currentContent.title}</h1>
            <p>{currentContent.subtitle}</p>
          </div>
          <div className="language-toggle">
            <button 
              className={language === 'en' ? 'active' : ''} 
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button 
              className={language === 'zh' ? 'active' : ''} 
              onClick={() => setLanguage('zh')}
            >
              中文
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>{currentContent.hero}</h2>
            <p>{currentContent.description}</p>
            <button className="cta-button">{currentContent.cta}</button>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="features-grid">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3>{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <h2>{currentContent.contact}</h2>
            <div className="contact-info">
              <p>📧 info@beautifultourinn.com</p>
              <p>📞 +86 138 0000 0000</p>
              <p>📍 Shanghai, China</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Beautiful Tour Inn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;