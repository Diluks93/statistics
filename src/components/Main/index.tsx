import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Statistics from 'pages/Statistics';

export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/statistics" element={<Statistics />} />
    </Routes>
  );
};

export default Main;
