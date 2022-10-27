import {useState} from "react";
import {useForm} from "react-hook-form";
import {login, register as user_register} from "../utils/service/AuthService";

const Login = () => {

    // Attention, ceci est de la triche
    const [state, setState] = useState('login');

    const {register, handleSubmit} = useForm();

    const save = async (user) => {
        if(state === 'login') {
            try {
                await login(user);
            } catch {
                alert('Mauvais identifiants')
            }
        }
        else {
            try {
                await user_register(user);
            } catch {
                alert(`Impossible de vous inscrire, veuillez vérifier vos données`)
            }
        }
        console.log('Vous êtes connecté⋅e !');
    }

    return (
        <main>
            <h1>Login</h1>
            <p>
                <button onClick={() => setState('login')}>Connexion</button>
                <button onClick={() => setState('inscription')}>Inscription</button>
            </p>

            <h2>{state.toUpperCase()}</h2>

            <form onSubmit={handleSubmit(save)}>
                <div>
                    <label>Email
                        <input {...register('email')}/>
                    </label>
                </div>
                <div>
                    <label>Password
                        <input type='password' {...register('password')}/>
                    </label>
                </div>
                <p>
                    <button type='submit'>{state}</button>
                </p>
            </form>
        </main>
    )
}

export default Login;