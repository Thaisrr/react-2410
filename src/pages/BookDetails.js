import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const BookDetails = () => {

    // params.id
    const {id} = useParams();
    const [book, setBook] = useState(undefined);

    useEffect(() => {
        const load = async () => {
            const {data} = await axios.get('http://localhost:8081/books/' + id);
            console.log(data)
            setBook(data)
        }
        if(id) load();
    }, [id])


    // 1 livre
    return (
        <>
            {book ? (
                <section>
                    <h2>{book.title}</h2>
                </section>
            ) : <p>Pas de livre à afficher</p>
            }
        </>


    )
}
export default BookDetails;