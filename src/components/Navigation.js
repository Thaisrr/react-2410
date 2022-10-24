import {NavLink} from "react-router-dom";
import '../style/Navigation.css';

const Navigation = () => {

    return (
        <nav id='Nav'>
            <h1>Formation React</h1>
            <ul>
                <li>
                    <NavLink to='/' end>Présentation</NavLink>
                </li>
                <li>
                    <NavLink to='/logique-composant'>Logique</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;