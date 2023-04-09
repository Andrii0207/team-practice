import { useState, useEffect } from 'react';
import { fetchEventsByName } from '../service/api';
import { useSearchParams, Link, Outlet } from 'react-router-dom';

const SearchPage = () => {
  const [event, setEvent] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventname = searchParams.get('eventname');

  useEffect(() => {
    if (!eventname) return;
    fetchEventsByName(eventname).then(setEvent);
  }, [eventname]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    setSearchParams({ eventname: form.elements.eventname.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventname" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {event.map(el => {
          return (
            <li key={el.id}>
              <Link to={el.id}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};

export { SearchPage };
