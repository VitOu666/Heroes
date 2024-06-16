import '../assets/data';
export default function HeroCard (props) {
    return (
        <div className="hero">
            <img className="herImg" src={props.url} alt="" />
            <h2>{props.name}</h2>
            <p>
                <strong>Alter ego:</strong> {props.alretego}
            </p>
            <p>
                <strong>Universe:</strong> {props.alretego}
            </p>
            <p>
                <strong>Occupation:</strong> {props.alretego}
            </p>
            <p>
                <strong>Friends:</strong> {props.alretego}
            </p>
            <p>
                <strong>Superpowers:</strong> {props.alretego}
            </p>
            <p>{props.info}</p>

        </div>
    )
}