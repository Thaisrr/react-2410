import {NavLink} from "react-router-dom";
import '../style/Navigation.css';

const Navigation = () => {
    const links = [
        {path: '/', name: 'Présentation'},
        {path: '/logique-composant', name: 'Logique' },
        {path: '/props', name: 'Props'},
        {path: '/states', name: 'States'},
        {path: '/forms', name: 'Formulaires'},
        {path: '/class', name: 'Classe'},
        {path: '/effect', name: 'UseEffect'},
        {path: '/requests', name: 'Requêtes'},
        {path: '/starwars', name: 'StarWars'}
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
            </ul>
        </nav>
    )
}
export default Navigation;