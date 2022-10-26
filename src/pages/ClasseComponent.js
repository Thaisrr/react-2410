import {Component} from "react";

class ClasseComponent extends Component {

    title =  'Hello Classe Component !';
    interval;

    constructor(props) {
        super(props);
        this.state = {
            data1: 'Valeur de data 1',
            obj: {
                attr: 'Toto'
            }
        }
    }

    updateTitle = () => {
        this.title = 'Nouveau titre';
        console.log(this.title);
    }

    updateData1 = () => {
        this.setState({data1: 'Nouvelle valeur'});
        console.log(this.state);
    }


    componentDidMount() {
        console.log('Mounted', this.title);
        // Requêtes asynchrones vers l'API
        // Ouverture de flux, ect...
        let count = 0;
        this.interval = setInterval(() => {
            console.log(count);
            count++;
        }, 1000);

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`Modification de state : ${prevState.data1}  => ${this.state.data1}`);
    }

    componentWillUnmount() {
        // Désouscription aux flux, requêtes, observables, ...
        console.log('Démontage du composant');
        clearInterval(this.interval);
    }


    render() {
        return (
            <main>
                <h1>{this.title}</h1>
                <p>
                    <button onClick={this.updateTitle}>Mettre à jour le titre</button>
                </p>

                <div>
                    <p>Data 1 : {this.state.data1}</p>
                    <p>
                        <button onClick={this.updateData1}>Mettre à jour</button>
                    </p>
                </div>
            </main>
        )
    }

}

export default ClasseComponent;