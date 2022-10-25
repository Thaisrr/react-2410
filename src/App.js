import './style/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Presentation from './pages/Presentation';
import Logique from "./pages/Logique";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import Props from "./pages/Props";
import States from "./pages/States";

function App() {
  return (
    <div className="App">
        <BrowserRouter> {/* Pour indiquer à react d'utiliser le router */}
            <Navigation/>

            <Routes> {/* a mettre à l'endroit où on souhaite que le router injecte les composants */}
                <Route path="/" element={<Presentation/>} /> {/* Pour déclarer le chemin des composants pages */}
                <Route path='/logique-composant' element={<Logique/>} />
                <Route path='/hello' element={
                    <>
                        <h1>Hello World !</h1>
                    </>
                }/>
                <Route path='/props' element={<Props/>} />
                <Route path='/states' element={<States/>} />
                <Route path='404' element={<NotFound/>} />
                <Route path='*' element={<NotFound/>} />
                {/*<Route path='*' element={ <Redirect to='/404'/> } />*/}
            </Routes>
            <footer>
                <p>Dawan -- 2022</p>
            </footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
