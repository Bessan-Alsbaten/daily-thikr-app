import { useState } from 'react';


export default function AzkarCard({ text, count, onComplete }) {
  const [remaining, setRemaining] = useState(count);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (remaining > 0) {
      const nextRemaining = remaining - 1;
      setRemaining(nextRemaining);
      setClicked(true);

      if (nextRemaining === 0 && onComplete) {
        onComplete(); // إشعار بانتهاء الكارد
      }
    }
  };

  const handleReset = () => {
    setRemaining(count);
    setClicked(false);
  };

  return (
    <div className={`azkar-card ${clicked ? 'clicked' : ''}`}>
      <p className="text">{text}</p>
      <div className="controls">
        <button onClick={handleClick} disabled={remaining === 0}>
          {remaining > 0 ? `${remaining}` : 'تم'}
        </button>
        <button onClick={handleReset} title="إعادة" className="reset-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5V2L7 7l5 5V9a5 5 0 1 1-5 5H6a6 6 0 1 0 6-6z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
