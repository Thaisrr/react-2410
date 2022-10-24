import '../style/Presentation.css';

const Presentation = () => {
    const message = 'Le JSX c\'est trop génial !';
    const jsx = <span id="span">Je suis un span</span>;
    const image = {
        url : 'https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif',
        title: 'Chat',
        description: 'Miaou'
    };

    const color = '#632823';
    const style = {
        color,
        border: 'solid teal 2px'
    }


    return (
        <div id="Presentation">
            <h2>Présentation</h2>

            <section>
                <h2>Le JSX</h2>

                <p>Le JSX est un type de données arrivée avec React.</p>
                <p>C'est une des manières de créer des templates.</p>
                <p>Le JSX n'est ni du HTML, ni une string. C'est une notation ayant des normes similaires au XML.</p>
                <ul>
                    <li>Les balises orphelines doivent être fermées.</li>
                    <li>On utilise des majuscules pour les noms des composants, les minuscules sont interprétées comme du HTML.</li>
                    <li>Un composant ne doit retourner qu'un bloc de JSX. ( Balise vide, soit une balise HTML, soit un composant )</li>
                </ul>
            </section>

            <section>
                <h2>Interpolation</h2>
                <p>L'interpolation, c'est le fait de pouvoir calculer du JS dans le template.</p>
                <p>Pour interpoler, on utilise les accolades.</p>

                <ul>
                    <li>{message}</li>
                    <li>1 + 1 = {1 + 1}</li>
                    <li>{jsx}</li>
                </ul>

                <p>Attention : certains caractères qu'on ne pas afficher tel quel dans le JSX.
                    Il faut les interpréter comme une string pour les échapper.
                </p>
                <ul>
                    <li>Les accolades : { '{}' }</li>
                    <li>Les crochets : { '<>' }</li>
                </ul>

            </section>

            <section>
                <h2>Attributs HTML</h2>

                <p>Les mots clefs réservés Javascript ne peuvent pas être utilisés dans les balises JSX.</p>

                <ul>
                    <li className='maclasse'>class : className</li>
                    <li>for : htmlFor</li>
                </ul>
                <p>De plus, pour les noms en plusieurs mot, le JSX utilise le camelCase : <i>tabindex : tabIndex</i></p>

                <h3>L'attribute Binding</h3>

                <figure>
                    <img src={image.url} alt={image.description}/>
                    <figcaption>{image.title}</figcaption>
                </figure>

                <p>Tous les attributs de balise peuvent interpréter au choix, une string, en utilisant des "",
                ou du JS en utilisant les accolades.
                </p>

                <h3>Le style</h3>

                <p style={{color}}>Le style peut également être passé dynamiquement ( dans le JSX ).</p>
                <p style={{color : color}}>Le style peut également être passé dynamiquement ( dans le JSX ).</p>
                <p style={style}>Le style peut également être passé dynamiquement ( dans le JSX ).</p>

                <p>Pour le style passé via un fichier CSS : </p>
                <ul>
                    <li>Il faut importer le fichier CSS ( cf, haut du fichier ). Le chemin de l'import se fait depuis le fichier qui requête.</li>
                    <li>Le style n'est pas cloisonné. Pour simuler un cloisonnement, on peut identifier les composants via une classe ou un id,
                    et préfixer les selecteurs du fichier CSS avec.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Les Images</h2>

                <p>Lorsqu'on souhaite afficher des images en CSS: </p>
                <div className="img-container">Coucou</div>
                <ul>
                    <li>Les images se rangent dans le dossier src</li>
                    <li>Le chemin dans le css, pour accéder à l'image se fait depuis le ficher CSS</li>
                </ul>

                <p>Dans le HTML, les chemins d'images se font depuis le fichier index.html. </p>
                <p>Les images doivent être rangées dans le dossier public.</p>
                <img src="./images/logo192.png" alt=""/>
            </section>
        </div>
    );
}

export default Presentation;


/*
const Presentation = function () {
    return (
        <div>
            <h2>Présentation</h2>
        </div>
    )
}
*/
