import { Link } from 'react-router-dom';

const Characters = ({ characters }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <h2>Characters</h2>
      {characters.map((character) => (
        <Link to={`/characters/${character.id}`} key={character.id}>
          {character.name}
        </Link>
      ))}
    </div>
  );
};

export default Characters;
