import axios from "axios";
import {useEffect, useState} from "react";
import User from "../components/User";

const Requetes = () => {

    const api_url = 'https://jsonplaceholder.typicode.com/users';
    let variable;

    const promesse = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve(1);
            } else {
                reject('BOOM, c\'est cassé ');
            }
        }, 2000)
    });

    const promesse2 = (id) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve('Mon id est ' + id);
            } else {
                reject('BOOM, c\'est cassé ');
            }
        }, 2000);
    });

    const getData = () => {
        promesse()
            .then((id) => promesse2(id))
            .then(data => {
                variable = data;
                console.log(variable);
            })
            .catch(err => console.log(err))
            .finally(() => console.log('Finito')) // S'execute à la fin des promesses, quelqu'en soit l'issue
        console.log(variable); // undefined
    }

    //const getData3 = async function () {}
    //async function getData4() {}

    const getData2 = async () => {
        try {
            const id = await promesse();
            variable = await promesse2(id);
            console.log(variable);

        } catch (e) {
            console.log('Oh no !', e)
        } finally {
            console.log('Finito')
        }
    }

    const getUsers1 = async () => {
        const response = await fetch(api_url); // GET -> réponse = objet HTTP
        let data = await response.json(); // .json() retourne un promesse
        console.log(data);
    }

    const getUsers2 = async () => {
        const response = await axios.get(api_url);
        console.log(response);
        let data = response.data;
        console.log(data);
       // const {data} = await axios.get(api_url);
    }

    /*
    GET -> récupérer les données
    POST -> créer / envoyer des données
    PUT -> remplace des données
    PATCH -> modifie partiellement les données
    DELETE -> supprime des données

    OPTION
    HEAD
    CONNECT
    TRACE
     */

    const testRequests = async () => {
        const id = 123
        const data = await axios.put(`${api_url}/${id}`, {firstname: "toto"}, {
            headers: {'Authentication': 'Bearer jjdklsfjldfls'},
            params: {id: 1, email: 'toto@mail.fr'}
        })
        console.log(data)
    }


    /************** Cas pratique ***********/
    let [users, setUsers] = useState(undefined);

    useEffect(() => {
        const loadUsers = async () => {
            const {data} = await axios.get(api_url);
            setUsers(data);
        }
        loadUsers();
    }, [])

    return (
        <main>
            <h1>Les Requêtes HTTP</h1>

            <button onClick={getData}>Data</button>
            <button onClick={getData2}>Data 2</button>
            <button onClick={getUsers1}>Users 1</button>
            <button onClick={getUsers2}>Users 2</button>
            <button onClick={testRequests}>Tests</button>

            <section>
                <h2>Users : cas pratique</h2>

                {users? (
                    <div className='grid'>
                        {users.map(u => <User key={u.id} user={u}/>)}
                    </div>
                ) : <p>Chargement en cours...</p>
                }


            </section>

        </main>
    )
}
export default Requetes;