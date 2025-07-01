import AzkarPage from '../components/AzkarPage';

export default function EveningAzkar() {
  return <AzkarPage categoryTitle="أذكار المساء" categoryKey="اذكار_المساء" />;
}








/*import AzkarCard from '../components/AzkarCard';
import '../styles/Pages.css';

const eveningAzkar = [
  { text: 'أَمْسَيْنا وَأَمْسَى المُلْكُ للهِ...', count: 1 },
  { text: 'اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ...', count: 1 },
  { text: 'رَضيـتُ بِاللهِ رَبّـاً، وَبِالإسْلامِ ديـناً...', count: 3 },
  { text: 'اللّهـمَّ إِنِّي أَمْسَيْـتُ أُشْهِدُكَ...', count: 1 },
  { text: 'اللّهـمَّ ما أَمْسى بي مِـن نِعْـمَةٍ...', count: 1 },
  // كمل بقية الأذكار
];

export default function EveningAzkar() {
  return (
    <div className="page">
      {eveningAzkar.map((zekr, index) => (
        <AzkarCard key={index} text={zekr.text} count={zekr.count} />
      ))}
    </div>
  );
}*/
