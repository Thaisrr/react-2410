import {useForm} from "react-hook-form";

const Formulaires = () => {

    const myHandleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const choices = form?.choices;
        const checked = [];
        for(let choice of choices) {
            if(choice.checked) {
                checked.push(choice?.value)
            }
        }
        console.log(checked)
        const user = {name};
        console.log('Utilisateur⋅trice créé !', user);
        form.reset();
    }


    /*** React Hook Form **************/
    const {register, handleSubmit} = useForm();

    const save = (e) => {
        console.log(e);
    }

    return (
        <main>
            <h1>Les Formulaires</h1>

            <h2>Users</h2>
            <form onSubmit={myHandleSubmit}>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input id='name'/>
                </div>
                <fieldset>
                    <legend>Choix</legend>

                    <div>
                        <label htmlFor='a'>A</label>
                        <input id='a' type='checkbox' name='choices' value='a'/>
                    </div>
                    <div>
                        <label htmlFor='b'>B</label>
                        <input id='b' type='checkbox' name='choices' value='b'/>
                    </div>
                </fieldset>
                <p>
                    <button type='submit'>Enregistrer</button>
                </p>
            </form>

            <h2>React Hook Form</h2>

            <form onSubmit={handleSubmit(save)}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input id='username' {...register('username')}/>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' {...register('email')}/>
                </div>
                <div>
                    <label htmlFor='titre'>Titre</label>
                    <select id='titre' {...register('title')}>
                        <option value='empress'>Impératrice</option>
                        <option value='jedi'>Jedi</option>
                    </select>
                </div>
                <fieldset>
                    <legend>Choix</legend>
                    <div>
                        <label htmlFor='a'>A</label>
                        <input id='a' type='checkbox' value='a' {...register('choice')}/>
                    </div>
                    <div>
                        <label htmlFor='b'>B</label>
                        <input id='b' type='checkbox' value='b' {...register('choice')}/>
                    </div>
                </fieldset>


                <p>
                    <button>Enregistrer</button>
                </p>
            </form>

        </main>
    )
}

export default Formulaires;