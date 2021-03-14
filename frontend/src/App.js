import './App.css';
import Records from "./components/records/Records";
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import PrivateRout from "./components/PrivateRout/PrivateRout";


function App() {
    return (
        <BrowserRouter >
            <div className="App">
                <PrivateRout exact path={'/'} component={Records} />
                <Route exact path={'/register'} render={() => <Register />} />
                <Route exact path={'/login'} render={() => <Login />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
