import DogCard from "./DogCard";
import { dogArray } from '../data/index'

function DogList(){
    return (
        dogArray.map(dog => <DogCard key={dog.key} name={dog.name} age={dog.age} description={dog.description} picture={dog.picture}/>)
    );
}

export default DogList;