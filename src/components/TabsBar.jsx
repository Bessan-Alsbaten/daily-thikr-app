import { NavLink } from 'react-router-dom';
import '../styles/TabsBar.css';

const tabs = [
  { path: '/morning', label: 'أذكار الصباح' },
  { path: '/evening', label: 'أذكار المساء' },
  { path: '/wake', label: 'أذكار الاستيقاظ' },
  { path: '/sleep', label: 'أذكار النوم' },
  { path: '/ablution', label: 'أذكار الوضوء' },
  { path: '/after-prayer', label: 'أذكار بعد الصلاة' },
];

export default function TabsBar() {
  return (
    <div className="tabs-bar">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            isActive ? 'tab-button active' : 'tab-button'
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
