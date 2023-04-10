import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchEventById } from '../service/api';
import { useEffect, useState } from 'react';

const EventSubPage = () => {
  const [query, setQuery] = useState(null);

  const location = useLocation();
  // console.log('EventSubPage location:', location);

  const params = useParams();

  useEffect(() => {
    fetchEventById(params.id)
      .then(resp => setQuery(resp))
      .catch(err => console.log(err.message));
  }, [params]);

  if (!query) {
    return null;
  }

  const { images, classifications, name } = query;

  return (
    <div>
      <img src={images[0].url} alt="" width="400px" />
      <p>name: {name}</p>
      <p>genre: {classifications[0].genre?.name}</p>
      <p>subgenre: {classifications[0].subGenre?.name}</p>
      <Link to="details" state={{ from: location }}>
        More Details
      </Link>
    </div>
  );
};

export default EventSubPage;
