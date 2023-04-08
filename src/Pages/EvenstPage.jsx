import { fetchEvents } from '../Servis/Events';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const EventsPage = () => {
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
      <Outlet />
    </>
  );
};

export { EventsPage };
