import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/Home';
import ContactsPage from 'pages/Contacts';
import StatisticsPage from 'pages/Statistics';
import ErrorPage from 'pages/Error';
import { Router } from 'router';

export const Main = () => {
  return (
    <Routes>
      <Route path={Router.home} element={<HomePage />} />
      <Route path={Router.contacts} element={<ContactsPage />} />
      <Route path={Router.statistics} element={<StatisticsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Main;
