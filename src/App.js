import './style/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Presentation from './pages/Presentation';
import Logique from "./pages/Logique";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navigation/>

            <Routes>
                <Route path="/" element={<Presentation/>} />
                <Route path='/logique-composant' element={<Logique/>} />
                <Route path='/hello' element={
                    <>
                        <h1>Hello World !</h1>
                    </>
                }/>
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
