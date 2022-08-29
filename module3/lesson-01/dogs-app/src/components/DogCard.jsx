import './DogCard.css';

function DogCard({ name, age, description, picture }){
    return (
        <div className='dog-card'>
            <h1>{name}</h1>
            <img src={picture} alt="dog_picture" />
            <p>{description}</p>
            <p>{age} years old</p>
        </div>
    )
}

export default DogCard;