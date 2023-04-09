import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchEventById } from '../service/api';
import { useEffect, useRef, useState } from 'react';

export const Details = ({ id }) => {
  const [item, setItem] = useState(null);

  const params = useParams().id;
  const location = useLocation();
  const refLocation = useRef(location.state?.from.state?.from ?? 'search');
  //   console.log('Details location:', location);
  //   console.log('Details refLocation:', refLocation);

  useEffect(() => {
    fetchEventById(params).then(resp => setItem(resp));
  }, [params]);

  if (!item) {
    return null;
  }

  console.log(item);

  const { images, name, info, classifications, ageRestrictions } = item;

  return (
    <div>
      <Link type="button" to={refLocation.current}>
        GO BACK
      </Link>
      <p>Name: {name}</p>
      <p>Genre: {classifications[0].genre.name}</p>
      {(ageRestrictions || ageRestrictions?.ageRuleDescription) && (
        <p>age: {ageRestrictions?.ageRuleDescription} </p>
      )}

      {
        <div>
          <img src={images[0].url} alt={name} />
        </div>
      }
      {info && <p style={{ width: '800px' }}>{info}</p>}
    </div>
  );
};
