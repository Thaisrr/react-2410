import './style/App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Presentation from './pages/Presentation';
import Logique from "./pages/Logique";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import Props from "./pages/Props";
import States from "./pages/States";
import Formulaires from "./pages/Formulaires";
import ClasseComponent from "./pages/ClasseComponent";
import HookEffet from "./pages/HookEffet";
import Requetes from "./pages/Requetes";
import StarWars from "./pages/StarWars";
import React from "react";
import {Suspense} from "react";
import SearchBooks from "./pages/SearchBooks";
import Login from "./pages/Login";
import {is_logged} from "./utils/service/AuthService";
import Secret from "./pages/Secret";
const Parametres = React.lazy(() => import("./pages/Parametres"));
const BookDetails = React.lazy(() => import( "./pages/BookDetails"));


function App() {
    const ProtectedRoute = ({children}) => {
        if(is_logged()) return children;
        return <Navigate to='/login' replace/>
    }

  return (
    <div className="App">
        <BrowserRouter> {/* Pour indiquer à react d'utiliser le router */}
            <Navigation/>
            <Suspense fallback={<div>Chargement de la page...</div>}>
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
                <Route path='/forms' element={<Formulaires/>} />
                <Route path="/class" element={<ClasseComponent/>} />
                <Route path='/effect' element={<HookEffet/>} />
                <Route path='/requests' element={<Requetes/>} />
                <Route path='/starwars' element={<StarWars/>} />
                <Route path="/params" element={<Parametres/>} >
                    <Route path='book/:id' element={<BookDetails/> }/>
                    <Route path='search' element={<SearchBooks/>} />
                </Route>
                <Route path='/login' element={<Login/>} />
                <Route path='/secret' element={
                    <ProtectedRoute>
                        <Secret/>
                    </ProtectedRoute>}
                />
                <Route path='404' element={<NotFound/>} />
                <Route path='*' element={<NotFound/>} />
                {/*<Route path='*' element={ <Redirect to='/404'/> } />*/}
            </Routes>
            </Suspense>

            <footer>
                <p>Dawan -- 2022</p>
            </footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
