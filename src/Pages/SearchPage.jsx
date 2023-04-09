import { useState, useEffect } from 'react';
import { fetchEventsByName } from '../service/api';
import { useSearchParams, Link, Outlet, useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';

const SearchPage = () => {
  const [event, setEvent] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventname = searchParams.get('eventname');

  useEffect(() => {
    if (!eventname) return;
    fetchEventsByName(eventname).then(setEvent);
  }, [eventname]);

  const location = useLocation();
  // console.log('SearchPage location:', location);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.eventname.value;

    setSearchParams({
      eventname:
        value !== '' ? value : alert('Please enter some name to search'),
      // : toast.error('🦄 Wow so easy!', {
      //     position: 'top-center',
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: 'colored',
      //   }),
    });
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

export { SearchPage };
