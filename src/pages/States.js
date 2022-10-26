import {useState} from "react";

const States = function () {
    let counter = 0;
    /*
        const state = useState(0);
        const counterReactif = state[0]; // la valeur à surveiller
        const setCounterReactif = state[1]; // fonction de modification de la valeur
    */
    const [counterReactif, setCounterReactif] = useState(0);

    const [isLogged, setLogged] = useState(false);

    const [book, setBook] = useState({title: 'Frankenstein', author: 'Mary Shelley'});

    const [fruits, setFruits] = useState(['Abricot', 'Poires', 'Mangue']);


    const increment = function () {
        counter++;
        console.log(counter);
    }

    const incrementReactif = function () {
        setCounterReactif(counterReactif + 1)
    }

    const login = () => {
        setLogged(true);
    }

    const updateBook = (event, title = 'Le Prométhée des Temps Modernes') => {
        // book.title = title; -> Interdit, on ne peut pas modifier les valeurs du useState
       //setBook(book);

        // const copy = Object.assign(book, {title});

        // const copy = {...book};
        // copy.title = title;
        setBook({...book, title});
    }

    const addFruit = (new_fruit) => {
        const copy = [...fruits]; //
        //const copy = Array.from(fruits);
        copy.push(new_fruit);
        setFruits(copy);
        // setFruits([...fruits, new_fruit]);
    }

    const NotLoggedBlock = () => (
        <>
            <p>Vous n'êtes pas connecté⋅e !!!!</p>
            <p>
                <button onClick={login}>Se Connecter</button>
            </p>
        </>
    )

    const LoggedBlock = () => (
        <>
            <p>Vous êtes connecté⋅e ! Bienvenue Jean Michel !</p>
            <p>
                <button onClick={() => setLogged(false)}>Déconnexion</button>
            </p>
        </>
    )

    return (
        <main>
            <h1>Les States</h1>

            <section>
                <h2>Problèmatique</h2>
                <p>Les données affichées dans le DOM ne sont nativement pas réactives, comme en JS : </p>
                <p>La valeur du compteur s'incrémente, mais l'affichage reste à 0.</p>
                <p>Mon compteur : <b>{counter}</b></p>
                <p>
                    <button onClick={increment}>Incrémenter</button>
                </p>
            </section>
            <section>
                <h2>Use State</h2>

                <p>Use State est un <i>hook</i> natif de React, disponible depuis la version 15 et +</p>
                <p>Il permet de demander à React de surveiller une donnée, pour mettre à jour le DOM lorsqu'elle se modifie.</p>

                <p>UseState est une fonction, qui prend en paramétre la valeur par défaut de notre élément à surveiller.</p>
                <p><small>( Exemple pour un compteur )</small></p>
                <p><code>useState(0)</code></p>

                <p>UseState nous renvoie un tableau, qui contient 2 éléments</p>
                <ul>
                    <li>0. La valeur elle même</li>
                    <li>1. Une fonction qui attend 1 paramétre, et qui modifie la valeur.</li>
                </ul>

                <p><code>const [counter, setCounter] = useState(0)</code></p>
                <ul>
                    <li>counter = 0</li>
                    <li>setCounter = function ( value: number) </li>
                </ul>

                <p>La valeur récupérée ne doit pas être modifiée ( ici, counter doit être une constante ).</p>

                <p>On peut utiliser autant de useState que nécéssaire.</p>
                <p>Si la valeur n'est pas affichée, il est inutile de faire un useState. Idem si elle n'est jamais modifiée.</p>

            </section>
            <section>
                <h2>Exemples</h2>
                <p>Mon compteur Reactif : <b>{counterReactif}</b></p>
                <p>
                    <button onClick={incrementReactif}>Incrémenter</button>
                </p>

                {isLogged? <LoggedBlock/> : <NotLoggedBlock/> }

                <hr/>

                <h3>Objet</h3>
                <p>{book.title}, de {book.author}</p>
                <p>
                    <button onClick={updateBook}>Update</button>
                </p>

                <h3>Les tableaux</h3>

                <p>
                    <button onClick={() => addFruit('Orange')}>Orange</button>
                    <button onClick={() => addFruit('Poire')}>Poire</button>
                </p>

                <ul>
                    {fruits.map(f => <li key={f}>{f}</li> )}
                </ul>
            </section>

        </main>
    )
}

export default States;