import { useEffect, useState } from 'react';
import AzkarCard from './AzkarCard';
import '../styles/AzkarPage.css';

export default function AzkarPage({ categoryKey, categoryTitle }) {
  const [azkarList, setAzkarList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAzkar = async () => {
      try {
        const res = await fetch('/azkar.json');
        if (!res.ok) throw new Error('فشل في تحميل الملف');
        const data = await res.json();
        const selectedAzkar = data.categories[categoryKey];
        setAzkarList(selectedAzkar || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAzkar();
  }, [categoryKey]);

  const handleNext = () => {
    if (currentIndex < azkarList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAutoNext = () => {
    if (currentIndex < azkarList.length - 1) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 500);
    }
  };

  return (
    <div className="azkar-page">
      <div className="azkar-header">
        <h2>{categoryTitle}</h2>
      </div>

      {loading && <p>جاري التحميل...</p>}
      {error && <p>حدث خطأ: {error}</p>}

      {!loading && !error && azkarList.length > 0 && (
        <div className="azkar-content">
          <button
            className="arrow-button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ❮
          </button>

          <AzkarCard
            key={currentIndex}
            text={azkarList[currentIndex].text}
            count={azkarList[currentIndex].count}
            onComplete={handleAutoNext}
          />

          <button
            className="arrow-button"
            onClick={handleNext}
            disabled={currentIndex === azkarList.length - 1}
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
}
