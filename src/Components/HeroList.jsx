const HeroList = ({heroes}) => {
    return (
        <div className="hero">
            <div>
            {heroes.map(hero => (
            <div>
            <img className="herImg" src={hero.url} alt="" />
            <h2>{hero.name}</h2>
            <p>
                <strong>Alter ego:</strong> {hero.alretego}
            </p>
            <p>
                <strong>Universe:</strong> {hero.universe}
            </p>
            <p>
                <strong>Occupation:</strong> {hero.occupation}
            </p>
            <p>
                <strong>Friends:</strong> {hero.friends}
            </p>
            <p>
                <strong>Superpowers:</strong> {hero.superpowers}
            </p>
            <p>{hero.info}</p>
            </div>
        ))}
            </div>
        </div>
    )
};
export default HeroList;
/*
const HeroList = ({ heroes }) => {
    return (
        <div>
          <h2>User List</h2>
          <ul>
            {heroes.map(hero => (
              <li key={hero.id}>
                {hero.name} - {hero.age} years old
              </li>
            ))}
          </ul>
        </div>
      );
};
export default HeroList;*/