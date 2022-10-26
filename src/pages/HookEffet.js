import {useEffect, useState} from "react";
import logique from "./Logique";

const HookEffet = () => {
    const [counter, setCounter] = useState(0);
    const [book, setBook] = useState([]);


    const loadBooks = () => {
        setBook(['Livre 1', 'Livre 2']);
    }


    // s'effectue au montage du composant, puis à chaque mise à jour
    useEffect(() => {
        console.log('Coucou de use effect');
    })

   // s'effectue uniquement au chargement du composant
    useEffect(() => {
        //loadBooks();
        const load = () => {
            setBook(['Livre 1', 'Livre 2']);
        }
        load();
        console.log('Chargement des livres');
    }, []);

    // s'effectue à chaque modification de counter
    // On ne modifie JAMAIS les valeurs surveillées ! ( sinon, boucle infinie )
    useEffect(() => {
        console.log('Counter a été modifié')
    }, [counter]);

    // Pour effectuer une action à la destruction du composant, on passe cette action dans une fonction en retour du useEffect
    useEffect(() => {
        console.log('Avec retour');
        let count = 0;
        let interval = setInterval(() => console.log('Interval ', count++), 1000) // mount
        return () => clearInterval(interval); // unmount
    }, []);



    return (
        <main>
            <h1>Le Hook d'effet</h1>

            <p><b>{counter}</b>
                <button onClick={() => setCounter(counter + 1)}>Incrémenter</button>
            </p>

            <ul>
                {book.map(b => <li key={b}>{b}</li> )}
            </ul>
        </main>
    )
}

export default HookEffet;