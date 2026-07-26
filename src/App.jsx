import React, { useState } from 'react';
import cancion from './assets/lilpeep.mp3';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [clockStarted, setClockStarted] = useState(false);
  const [openedLetter, setOpenedLetter] = useState(false);
  const [scratchCount, setScratchCount] = useState(0);

  return (
    <div className="comic-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Special+Elite&family=VT323&display=swap');

        :root {
          --bg-manga: #f4f1ea;
          --panel-border: #111;
          --accent-red: #cc2929;
          --halftone: radial-gradient(#111 15%, transparent 16%);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: #121212;
          color: #111;
          font-family: 'Special Elite', monospace;
        }

        .comic-container {
          max-width: 800px;
          margin: 20px auto;
          background-color: var(--bg-manga);
          background-image: var(--halftone);
          background-size: 5px 5px;
          border: 6px solid var(--panel-border);
          box-shadow: 12px 12px 0px rgba(0,0,0,0.8);
          position: relative;
          padding: 20px;
        }

        .intro-overlay {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.92);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          color: #fff;
          text-align: center;
          padding: 20px;
        }

        .manga-title-splash {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 5rem;
          color: #fff;
          text-shadow: 5px 5px 0px var(--accent-red);
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        .manga-btn {
          background: #000;
          color: #fff;
          border: 3px solid #fff;
          padding: 15px 35px;
          font-family: 'Special Elite', monospace;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 5px 5px 0px var(--accent-red);
          transition: all 0.1s ease;
        }

        .manga-btn:hover {
          background: #fff;
          color: #000;
          transform: translate(-3px, -3px);
          box-shadow: 8px 8px 0px var(--accent-red);
        }

        .manga-header {
          border-bottom: 4px solid var(--panel-border);
          padding-bottom: 15px;
          margin-bottom: 25px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .manga-main-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3.5rem;
          letter-spacing: 2px;
          line-height: 1;
        }

        .sfx-top {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem;
          color: var(--accent-red);
          transform: rotate(-8deg);
        }

        .panel-box {
          background: #fff;
          border: 4px solid var(--panel-border);
          padding: 25px;
          margin-bottom: 30px;
          position: relative;
          box-shadow: 6px 6px 0px rgba(0,0,0,0.8);
        }

        .panel-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          border-bottom: 3px solid var(--panel-border);
          margin-bottom: 15px;
          padding-bottom: 5px;
          display: flex;
          justify-content: space-between;
        }

        .letter-content {
          font-size: 1.1rem;
          line-height: 1.6;
          background: #fffef0;
          padding: 20px;
          border: 2px dashed #999;
          position: relative;
        }

        .letter-hidden {
          filter: blur(6px);
          user-select: none;
          cursor: pointer;
          transition: filter 0.4s ease;
        }

        .letter-hidden.revealed {
          filter: blur(0);
        }

        .cake-container {
          text-align: center;
          padding: 20px;
        }

        .cake-art {
          font-size: 3.5rem;
          margin: 15px 0;
          cursor: pointer;
          transition: transform 0.2s;
          display: inline-block;
        }

        .cake-art:active {
          transform: scale(0.95);
        }

        @keyframes spinClock {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .clock-wrapper {
          margin-top: 15px;
          padding: 15px;
          background: #111;
          color: #fff;
          border: 2px solid #fff;
        }

        .spinning-clock {
          font-size: 3rem;
          display: inline-block;
          animation: spinClock 3s linear infinite;
          margin: 10px 0;
        }

        .clock-message {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          color: #ffcc00;
          letter-spacing: 1px;
          margin-top: 5px;
        }

        .scratch-card {
          background: #111;
          color: #fff;
          padding: 20px;
          border: 3px solid #fff;
          text-align: center;
        }

        .scratch-reward {
          font-size: 1.5rem;
          color: #ffcc00;
          font-family: 'Bebas Neue', sans-serif;
          margin-top: 10px;
          letter-spacing: 2px;
        }

        .footer-tag {
          text-align: center;
          font-size: 0.8rem;
          color: #444;
          margin-top: 20px;
        }
      `}</style>

      {isPlaying && (
        <audio 
          src={cancion} 
          autoPlay 
          loop 
          controls
        />
      )}

      {!isPlaying && (
        <div className="intro-overlay">
          <div style={{ position: 'absolute', top: '20px', fontFamily: 'VT323', fontSize: '2rem', color: '#ff4d4d' }}>
            [18 AÑOS DE UNA MEKILLA]
          </div>
          <h1 className="manga-title-splash">HAPPY BIRTHDAY!</h1>
          <p style={{ marginBottom: '30px', fontSize: '1.2rem', maxWidth: '500px' }}>
            Presiona el botón para iniciar la música y abrir el archivo.
          </p>
          <button className="manga-btn" onClick={() => setIsPlaying(true)}>
            [ ABRIR CAPÍTULO ESPECIAL ➔ ]
          </button>
        </div>
      )}

      <header className="manga-header">
        <div>
          <span style={{ fontSize: '0.8rem', background: '#000', color: '#fff', padding: '2px 6px' }}>VOL. 01 // CAPÍTULO ÚNICO</span>
          <h1 className="manga-main-title">Que noche ya me quiero dormir</h1>
        </div>
        <div className="sfx-top">ドsドsドs!</div>
      </header>

      <div className="panel-box">
        <div className="panel-title">
          <span>01. // CARTA SECRETA</span>
          <span style={{ fontSize: '0.9rem', color: '#666' }}>[CLIC PARA REVELAR]</span>
        </div>
        
        <div 
          className={`letter-content ${openedLetter ? 'revealed' : 'letter-hidden'}`}
          onClick={() => setOpenedLetter(true)}
        >
          <p><strong>Hola idiota,</strong></p>
          <p style={{ margin: '10px 0' }}>
            Estas son las mañanitas que cantaba cepillin asi mero
          </p>
          <p>
            hola tonta, feliz pumpe, que te la pases de lo mas lindo, creo q no hace falta decirlo
            pq ya lo sabes pero eres una de mis amistades mas especiales en mi vida, 
            y te amo mucho aunq no se puede decir por ser dia especial lo digo JAJAJ, espero que 
            nunca sientas que estas sola o que te sientas una molestia porque siempre estare para ti, 
            no importa lo que pase. 
             
            Ojala en 70 años podamos acordarnos de esto y como el miti aunq fue un lugar horrible
            me dio el mejor regalo q es tu amistad yasabes, y antes q esto se ponga mas cursi feliz legalidad,
            te amo.
          </p>
          {!openedLetter && (
            <div style={{ position: 'absolute', top: '40%', left: '30%', background: '#000', color: '#fff', padding: '8px 15px', fontWeight: 'bold', border: '2px solid #fff' }}>
              ✦ HAZ CLIC AQUÍ PARA LEER MI GRAN CARTA ✦ 
            </div>
          )}
        </div>
      </div>

      <div className="panel-box">
        <div className="panel-title">
          <span>02. // PASTEL FALSO HASTA Q NOS VEAMOS</span>
          <span>{clockStarted ? '⏳ INFINITO' : 'CLICK EN EL PASTEL'}</span>
        </div>
        
        <div className="cake-container">
          <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
            {clockStarted ? 'El tiempo corre, paq vayas valorandome porfis.' : 'Haz clic en el pastel:'}
          </p>
          
          <div className="cake-art" onClick={() => setClockStarted(true)}>
            🎂
          </div>

          {!clockStarted && (
            <div>
              <button 
                className="manga-btn" 
                style={{ fontSize: '0.9rem', padding: '8px 20px', marginTop: '10px' }}
                onClick={() => setClockStarted(true)}
              >
                REVELAR ⏳
              </button>
            </div>
          )}

          {clockStarted && (
            <div className="clock-wrapper">
              <div className="spinning-clock">⏰</div>
              <div className="clock-message">
                "Hasta que este reloj deje de girar, dejaremos de ser amigas bastardita (ojala pronto)"
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="panel-box" style={{ background: '#000', color: '#fff' }}>
        <div className="panel-title" style={{ color: '#fff', borderColor: '#fff' }}>
          <span>03. // BONO ESPECIAL (INVENTADO)</span>
          <span>SYSTEM // BONUS</span>
        </div>

        <div className="scratch-card">
          <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
            Raspa o presiona el boleto de la suerte para descubrir tu superpoder:
          </p>
          
          <button 
            className="manga-btn" 
            onClick={() => setScratchCount(prev => prev + 1)}
            style={{ background: '#fff', color: '#000', border: '2px solid #000' }}
          >
            {scratchCount === 0 ? 'RASCAR TICKET DE LA SUERTE 🎟️' : '¡OTRO INTENTO! 🎲'}
          </button>

          {scratchCount > 0 && (
            <div className="scratch-reward">
              {scratchCount % 3 === 1 && '⚡ Te deseo muchos novios pq el q traes no me cae chido yasha.'}
              {scratchCount % 3 === 2 && '🌟 Te deseo dinero pq una debe ser la del billete en la amistad.'}
              {scratchCount % 3 === 0 && '🔥 Te deseo q aprendas a escribir parrafos, checa eso .'}
            </div>
          )}
        </div>
      </div>

      {/* 04. PANEL DE FOTO NUEVO */}
      <div className="panel-box">
        <div className="panel-title">
          <span> // 26/07 //</span>
          <span>SYSTEM // RECO</span>
        </div>
        
        <div style={{ textAlign: 'center', padding: '10px' }}>
          <img 
            src="https://imgur.com/a/W4POub0"
            alt="noseqsea"
            style={{ 
              width: '100%', 
              maxHeight: '400px', 
              objectFit: 'cover', 
              border: '3px solid #111',
              boxShadow: '4px 4px 0px #111'
            }} 
          />
          <p style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic', color: '#555' }}>
            "neta tengo un bn de sueño"
          </p>
        </div>
      </div>

      <div className="footer-tag">
        TO BE CONTINUED...
      </div>
    </div>
  );
}