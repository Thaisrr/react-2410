import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount} from "../store/counter";

const Redux = () => {

    const counter = useSelector(store => store?.counter.value);
    const modifications = useSelector(state => state?.counter.modifications);
    const dispatch = useDispatch();

    return (
        <main>
            <h1>Redux</h1>

            <h2>Compteur</h2>
            <p>Valeur : {counter} </p>
            <p><small>Modifié {modifications} fois</small></p>
            <p>
                <button onClick={() => dispatch(increment())}>++</button>
                <button onClick={() => dispatch(decrement())}>--</button>
                <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
            </p>
        </main>
    )
}
export default Redux;