import PropTypes from 'prop-types';

export const Child0 = () => (
    <div>
        <hr/>
        <h3>Child 0</h3>
        <p>Je n'ai pas de props, mon contenu est fixe.</p>
    </div>
)

export const Child1 = (props) => {
    console.log(props)
    return (
        <div>
            <hr/>
            <h3>Child 1</h3>
            <p>{props.children}</p>
        </div>
    )
}

export const Child2 = (props) => {
    console.log(props)
   // Impossible :  props.title ||= 'Mon titre par défaut';
  // Impossible :  props.author ||= 'Anonyme';
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
            </div>

            <p>--  {props.author}</p>
        </div>
    )
}

export const Child3 = (props) => {
    console.log(props.product.title);

    return (
        <div>
            <Child2 title={props.product.title}/>
        </div>
    )
}

export const Child4 = ({title, author='Inconnu', dispo=false, price=0}) => {
    // Pour passer des valeurs par défaut, il faut décomposer l'objet props
    return (
        <div>
            <div>
                <h3>{title}</h3>
            </div>

            <p>--  {author}</p>
            <p>Dispo ? {dispo ? 'OUI' : 'NON'}</p>
        </div>
    )
}

Child4.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    dispo: PropTypes.bool,
    price: PropTypes.number
}

export const Child5 = ({product, action, deleteFunc}) => (
    <div>
        <hr/>
        <h3>Child 5</h3>
        <p>{product.title}</p>
        <p>
            <button onClick={action}>Ne Cliquez pas ici!</button>
            <button onClick={() => deleteFunc(product.id)}>Supprimer</button>
        </p>
    </div>
);
