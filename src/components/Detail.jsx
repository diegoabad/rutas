import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [id]);

  return (
    <div>
      {!character ? (
        'CARGANDO...'
      ) : (
        <div>
          <button
            onClick={() => {
              navigate(`/characters/${parseInt(id) + 1}`);
            }}>
            SIGUIENTE
          </button>
          <h2>Detail personaje: {character?.name} </h2>
          <p>{character?.description}</p>
          <img src={character?.image} alt={character?.name} />
        </div>
      )}
    </div>
  );
};

export default Detail;
