import { Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import { Layout } from './Layout/Layout';
import { HomePage } from '../Pages/HomePage';
import { EventPage } from 'Pages/EventPage';
import { SearchPage } from 'Pages/SearchPage';
import { EventSubPage } from '../Pages/EventSubPage';
import { Details } from 'Pages/Details';

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
          <Route path="search" element={<SearchPage />}>
            <Route path=":id" element={<EventSubPage />} />
          </Route>
          <Route path="search/:id/details" element={<Details />} />
          {/* <Route path="*" element={<div>Not Found</div>}>  */}
        </Route>
      </Routes>
    </>
  );
};
