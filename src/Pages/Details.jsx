import { useLocation, useParams } from 'react-router-dom';
import { fetchEventById } from '../service/api';
import { useEffect, useState } from 'react';

export const Details = ({ id }) => {
  const [item, setItem] = useState(null);

  const location = useLocation();
  console.log('Details location:', location);

  const params = useParams().id;
  console.log('Details params:', params);

  useEffect(() => {
    fetchEventById(params).then(resp => setItem(resp));
  }, [params]);

  if (!item) {
    return null;
  }

  const { images, name, info, classifications, ageRestrictions } = item;
  console.log('Details:', item);

  return (
    <div>
      <button type="button"> =GO BACK= </button>
      <p>Name: {name}</p>
      <p>Genre: {classifications[0].genre.name}</p>
      {ageRestrictions.ageRuleDescription && (
        <p>age: {ageRestrictions.ageRuleDescription} </p>
      )}

      {
        <div>
          <img src={images[0].url} alt={name} />
        </div>
      }
      <p style={{ width: '1024px' }}>{info}</p>
    </div>
  );
};
