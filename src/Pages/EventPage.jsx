import { fetchEvents } from '../service/api';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const EventPage = () => {
  const [events, setEvents] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <ul>
        {events.map(el => {
          return (
            <li key={el.id}>
              <Link to={el.id} state={{ from: location }}>
                {el.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default EventPage;
