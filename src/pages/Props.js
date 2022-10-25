import {Child0, Child1, Child2, Child3, Child4} from "../components/Children";

const Props = () => {
    const product1 = {id: 1, title: 'Souris sans fil'};
    const products = [
        {id: 2, title: 'Clavier Fluorescent'},
        {id: 3, title: 'Ecran levitatif'},
    ]

    //const getProducts = (products) => products.map(p => <Child3 product={p} key={p.id}/>)

    const Products = () => {
        return products.map(p => <Child3 product={p} key={p.id}/>)
    }

    return (
        <div id="Props">
            <h1>Les Props</h1>

            <main>
                <section>
                    <h2>Children</h2>

                    <p>La props children représente le contenu passé entre
                        les balises du composant enfant.</p>
                    <p>Ce contenu peut-être du JSX, de la chaîne de caractère
                        à afficher.
                    </p>
                    <p>Elles permettent de créer des composants qui se comportent
                        comme des balises HTML classiques, mais personnalisées.
                    </p>

                    <Child0/>

                    <Child1>Coucou, je suis une props</Child1>
                    <Child1>Moi aussi je suis une props</Child1>
                    <Child1>Je suis la props children !</Child1>
                    <Child1>
                    <span>
                        <b>Je suis un children</b> <i>En JSX</i>
                    </span>
                    </Child1>
                </section>

                <section>
                    <h2>Les Props Nommées</h2>
                    <Child2 title='Frankenstein' author='Mary Shelley'/>
                    <Child2 title='Pc Portable' author='2345€'/>
                    <Child2 title={undefined} author={undefined}/>
                </section>

                <section>
                    <h2>Les objets</h2>
                    <Child3 product={product1}/>
                    <Products/>
                </section>

                <section>
                    <h2>Décomposition</h2>
                    <Child4 title='Frankenstein' author='Mary Shelley'/>
                    <Child4 title='Pc Portable' author='2345€'/>
                    <Child4 title='Pomme de Terre' dispo={true}/>
                </section>

            </main>

        </div>
    )
}
export default Props;