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
        {path: '/requests', name: 'Requêtes'}
    ]

    return (
        <nav id='Nav'>
            <h1>Formation React</h1>
            <ul>
                {links.map(link => (
                    <li>
                        <NavLink to={link.path} end={link.path === '/'} key={link.path}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Navigation;