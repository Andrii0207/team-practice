import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import { ToastContainer } from 'react-toastify';
import { Layout } from './Layout/Layout';
import { HomePage } from '../Pages/HomePage';
import { SearchPage } from 'Pages/SearchPage';
import { NotFound } from 'Pages/NotFound';

// import { EventSubPage } from '../Pages/EventSubPage';
// import { Details } from 'Pages/Details';
// import EventPage from 'Pages/EventPage';
const EventPage = lazy(() => import('Pages/EventPage'));
const EventSubPage = lazy(() => import('../Pages/EventSubPage'));
const Details = lazy(() => import('Pages/Details'));

export const App = () => {
  return (
    <>
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventPage />}>
            <Route path=":id" element={<EventSubPage />} />
          </Route>
          <Route path="events/:id/details" element={<Details />} />
          <Route path="search" element={<SearchPage />}>
            <Route path=":id" element={<EventSubPage />} />
          </Route>
          <Route path="search/:id/details" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
