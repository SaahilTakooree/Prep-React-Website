// GoodbyePage.jsx
import { useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import dramaticToneAnimation from './assets/animations/dramaticTone.json';
import cloudAnimation from './assets/animations/cloudAnimation.json';
import confettiAnimation from './assets/animations/confetti.json';
import './GoodbyePage.css';

function GoodbyePage() {
  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem(`goodbye-${id}`));

  if (!data) return <p>Goodbye not found.</p>;

  const { name, tone, message, image } = data;

  const showRain = tone === 'melancholy' || tone === 'sad';
  const showDramaticLottie = tone === 'dramatic';
  const showCloudLottie = tone === 'melancholy' || tone === 'sad';
  const showConfetti = tone === 'happy';

  return (
    <div className="goodbye-page-main-container">
      {showCloudLottie && (
        <div className="lottie-cloud-container">
          <Lottie
            animationData={cloudAnimation}
            loop
            autoplay
            style={{ width: '100vw', height: '100vh' }}
          />
        </div>
      )}

      {showDramaticLottie && (
        <div className="lottie-container">
          <Lottie
            animationData={dramaticToneAnimation}
            loop={false}
            autoplay
            style={{ width: '100vw', height: '100vh' }}
          />
        </div>
      )}

      {showConfetti && (
        <div className="lottie-container">
          <Lottie
            animationData={confettiAnimation}
            loop
            autoplay
            style={{ width: '100vw', height: '100vh' }}
          />
        </div>
      )}

      <div className={`goodbye-page tone-${tone}`}>
        {showRain && <Rain />}
        <h1>👋 Goodbye from {name || 'Anonymous'}</h1>
        <p className="goodbye-message">{message}</p>

        <div className="goodbye-image-container">
          {image && <img src={image} alt="Goodbye visual" className="goodbye-image" />}
        </div>

        <footer className="goodbye-footer">
          <p>This was {tone.toUpperCase()}.</p>
          <p>Share this page: <span>{window.location.href}</span></p>
        </footer>
      </div>
    </div>
  );
}

function Rain() {
  const drops = Array.from({ length: 50 });
  return (
    <div className="rain-container" aria-hidden="true">
      {drops.map((_, i) => (
        <div
          key={i}
          className="raindrop"
          style={{
            left: `${i * 2}%`,
            animationDelay: `${(i % 10) * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}

export default GoodbyePage;
