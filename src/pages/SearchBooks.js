import {useEffect, useRef, useState} from "react";
import axios from "axios";

const SearchBooks = () => {
    const [books, setBooks] = useState();
    const [filter, setFilter] = useState('');
    const search_input = useRef();

    const handleSearch = () => {
        //console.log(search_input)
        //console.log(search_input.current?.value)
        setFilter(search_input.current?.value);
    }

    useEffect(() => {
        const load = async () => {
            const {data} = await axios.get('http://localhost:8081/books', {
                params: {
                    title_like: filter
                }
            });
            setBooks(data)
        }
        if(filter) load();

    }, [filter])



    return (
        <section>
            <p>
                <input ref={search_input} type='search'/>
                <button onClick={handleSearch}>Chercher</button>
            </p>
            <h2>Votre recherche : </h2>

            {/* Afficher les livres qui correspondent à la recherche passée */}

            {(books?.length )? (
                <div className='grid'>
                    {books.map(b => <h3 key={b.id}>{b.title}, par {b.author}</h3>)}
                </div>
            ) : <p>Aucun livre à afficher</p> }

        </section>
    )
}
export default SearchBooks;