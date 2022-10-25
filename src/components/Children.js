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

export const Child4 = ({title, author='Inconnu', dispo=false}) => {
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