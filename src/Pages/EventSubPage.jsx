import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchEventById } from '../service/api';
import { useEffect, useState } from 'react';

export const EventSubPage = () => {
  const [query, setQuery] = useState(null);

  const location = useLocation();

  const params = useParams();

  useEffect(() => {
    fetchEventById(params.id)
      .then(resp => setQuery(resp))
      .catch(err => console.log(err.message));
  }, [params]);

  if (!query) {
    return null;
  }
  console.log(query);

  const { images, classifications, name } = query;

  return (
    <div>
      <img src={images[0].url} alt="" width="400px" />
      <p>name: {name}</p>
      <p>genre: {classifications[0].genre.name}</p>
      <p>subgenre: {classifications[0].subGenre.name}</p>
      <Link to="details" state={location.state}>
        More Details
      </Link>
    </div>
  );
};
