import {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {login, logout, register as user_register} from "../utils/service/AuthService";
import {useNavigate} from "react-router-dom";

const Login = () => {

    // Attention, ceci est de la triche
    const [state, setState] = useState('login');
    const check_input = useRef();
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();



    const save = async (user) => {
        // useRef retourne un objet {current : element HTML }
        // ici check_input.current => element input checkbox
        // .value => valeur de la checkbox ( true ou false )
        const stay_logged = check_input.current?.value;
        if(state === 'login') {
            try {
                await login(user, stay_logged);
            } catch {
                alert('Mauvais identifiants')
            }
        }
        else {
            try {
                await user_register(user, stay_logged);
            } catch {
                alert(`Impossible de vous inscrire, veuillez vérifier vos données`)
            }
        }
        console.log('Vous êtes connecté⋅e !');
        navigate('/secret');
    }


    return (
        <main>
            <h1>Login</h1>

            <p>
                <button onClick={() => logout()}>Déconnexion</button>
            </p>

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
                <div>
                    <label>
                        <input ref={check_input} type='checkbox' /> Rester connecté⋅e ?
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