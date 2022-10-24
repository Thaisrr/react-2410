const Logique = () => {
    const jsx = <p>Coucou, je suis un JSX déclaré en constante.</p>;
    const is_logged = false;
    const age = 0;
    const role = 'ADMIN';
    const all_roles = ['ADMIN', 'USER', 'ANONYMOUS', 'GOD'];
    const li_jsx = [
        <li>Element 1</li>,
        <li>Element 2</li>,
        <li>Element 3</li>,
    ];

    // Fonctions
    const getStatus = () => {
        if(is_logged) return <p>Connecté⋅e</p>;
        return <p>Anonyme</p>;
    }

    const Status = () => {
        if(is_logged) return <p>Connecté⋅e</p>;
        return <p>Anonyme</p>;
    }

    const Role = () => {
        switch (role) {
            case 'USER' :
                return <p>Loser !</p>
            case 'MODO':
                return <p>Semi God</p>
            case 'ADMIN':
                return <p>Vous êtes tout⋅e puissant⋅e !</p>
            default :
                return <p>Mais qui êtes vous ?</p>
        }
    }

    const getLi = (arr) => {
        const arr_li = [];
        for(let el of arr) {
            arr_li.push(<li>{el}</li>)
        }
      // ou  arr.forEach(el => {})
        return arr_li;
    }

    return (
        <>
            <h1>Logique de template</h1>

            <p>Dans les JSX, on peut interpoler du Javascript avec les accolades.</p>
            <p>On peut interpoler n'importe quel expression JS, à partir du moment où elle nous retourne une valeur.</p>
            <p>Attention, on ne peut pas utiliser le mot clef "return" dans le JSX.</p>

            <p>Exemple d'expression simple : </p>
            {jsx}

            <h2>Affichage conditionnel</h2>

            {/*
            Afficher, dans un paragraphe
             "Vous êtes connecté⋅e" ou "Veuillez de connecter" en fonction du boolean is_logged
            */}

            <h3>Le ternaire: Si... Sinon</h3>

            <p>Le ternaire peut être utilisé pour retourner une string, en fonction d'une condition :</p>
            <p>{is_logged? 'Vous êtes connecté⋅e.' : 'Veuillez vous connecter !'}</p>

            <p>Il peut aussi être utilisé pour retourner du JSX : </p>

            {is_logged?
                (<div>
                    <p>Bienvenue Jean Michel</p>
                </div>) :
                (<div>
                    <p>Vous n'êtes pas connecté⋅e !</p>
                </div>)
            };

            <h3>Si... alors</h3>

            {/* Afficher un bouton de connexion si is_logged est false, sinon rien */}
            <p>On peut utiliser le || ( ou logique ) pour afficher quelque chose si une condition
            est fausse, et rien dans le cas contraire.
            </p>

            {/* Si la première partie de l'expression est fausse, alors on lit la 2éme partie */}
            {is_logged || (
                <div>
                    <p>Veuillez vous connecter pour continuer</p>
                    <p><button>Se Connecter</button></p>
                </div>
            )}

            <p>On peut utiliser le && ( et logique ) pour afficher quelque chose si</p>
            {is_logged && <p>Vous êtes bien connecté⋅e !</p>}


            <p>Attention, le ?? affiche la première valeur si elle est différente de undefined ou null.</p>
            {age ?? <p>Vous n'avez pas entré votre age !</p>}
            { (age || age === 0) || <p>Vous n'avez pas entré votre age !</p>}

            <h3>Les Fonctions</h3>

            <p>On peut utiliser des fonctions pour gérer des logiques plus complexes, ou alléger le template.</p>
            {getStatus()}

            <p>Une fonction qui retourne du JSX est un composant, on peut donc la nommer avec une majuscule,
            et l'appeler comme une balise :</p>
            <Status/>
            <Role/>


            <h2>Les Listes</h2>

            <p>Pour afficher des listes, on va afficher un tableau de JSX.</p>
            <ul>{li_jsx}</ul>

            <h3>Via fonction</h3>
            <ul> Roles disponibles :
                {getLi(all_roles)}
            </ul>

            <h3>Le map</h3>
            <ul>
                { all_roles.map(r => <li>{r}</li>) }
            </ul>
        </>
    )
}

export default Logique;
