import {useEffect, useState} from "react";
import {getCharacters} from "../utils/service/StarWarsService";

const StarWars = () => {

    const [characters, setCharacters] = useState(undefined);

    useEffect(() => {
        const loadChar = async () => setCharacters(await getCharacters());
        loadChar();
    }, []);

    const CharactersGrid = () => (
        <div className='grid'>
            {characters.map(c => <Card character={c} key={c.name} /> )}
        </div>
    )

    const Card = ({character}) => (
        <div className='card'>
            <h3>{character.name}</h3>
        </div>
    )

    return (
        <main>
            <h1>Wiki StarWars</h1>

            <section>
                <h2>Personnages</h2>
                {characters? <CharactersGrid/> : <p>Chargement...</p>}
            </section>
        </main>
    )
}
export default StarWars;