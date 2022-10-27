import {useEffect, useState} from "react";
import axios from "axios";
import {NavLink, Outlet} from "react-router-dom";

const Parametres = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const load = async () => {
            const {data} = await axios.get('http://localhost:8081/books');
            console.log(data)
            setBooks(data);
        }
        load();
    }, []);

    const Card = ({book}) =>  (
            <div className='card'>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>
                    <NavLink to={'book/' + book.id}>Voir les détails</NavLink>
                </p>
            </div>
    )


    return (
        <main>
            <h1>Requêtes avancées</h1>
            <div className='grid'>
                {books && books.map(b => <Card key={b.id} book={b}/>)}
            </div>

            <h2>Ci-dessous : les routes imbriquées : </h2>
            <Outlet/>

            <p><small>----- fin de le route imbriquée ------</small></p>

        </main>
    )
}
export default Parametres;