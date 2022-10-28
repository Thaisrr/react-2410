import {NavLink} from "react-router-dom";
import '../style/Navigation.css';
import {useSelector} from "react-redux";

const Navigation = ({status}) => {
    const counter = useSelector(store => store?.counter.value);

    const links = [
        {path: '/', name: 'Présentation'},
        {path: '/logique-composant', name: 'Logique' },
        {path: '/props', name: 'Props'},
        {path: '/states', name: 'States'},
        {path: '/forms', name: 'Formulaires'},
        {path: '/class', name: 'Classe'},
        {path: '/effect', name: 'UseEffect'},
        {path: '/requests', name: 'Requêtes'},
        {path: '/starwars', name: 'StarWars'},
        {path: '/params', name: 'Paramétres'},
        {path: '/login', name: 'Login'},
        {path: '/redux', name: 'Redux'}
    ]

    return (
        <nav id='Nav'>
            <h1>Formation React</h1>
            <ul>
                {links.map(link => (
                    <li  key={link.name}>
                        <NavLink to={link.path} end={link.path === '/'}>{link.name}</NavLink>
                    </li>
                ))}
               <li>{status? 'Connecté⋅e' : 'Anonyme'}  | {counter}</li>
            </ul>
        </nav>
    )
}
export default Navigation;