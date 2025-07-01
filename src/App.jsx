import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MorningAzkar from './pages/MorningAzkar';
import EveningAzkar from './pages/EveningAzkar';
import WakingUpAzkar from './pages/WakingUpAzkar';
import BeforeSleepingAzkar from './pages/BeforSleepingAzkar';
import AblutionAzkar from './pages/AblutionAzkar';
import AfterPrayerAzkar from './pages/AfterPrayerAzkar';
import TabsBar from './components/TabsBar';
import './styles/AzkarCard.css';
import './styles/pages.css';


function App() {
  return (
    <BrowserRouter>
    <TabsBar />
  <Routes>
    <Route path="/" element={<MorningAzkar />} />  {/* هذا السطر الجديد */}
    <Route path="/morning" element={<MorningAzkar />} />
    <Route path="/evening" element={<EveningAzkar />} />
    <Route path="/wake" element={<WakingUpAzkar />} />
    <Route path="/sleep" element={<BeforeSleepingAzkar />} />
    <Route path="/ablution" element={<AblutionAzkar />} />
    <Route path="/after-prayer" element={<AfterPrayerAzkar />} />
  </Routes>
</BrowserRouter>

  );
}

export default App;
