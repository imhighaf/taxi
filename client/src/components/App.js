import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';


const Dashboard = () => <h2>Dashboard</h2>
const New = () => <h2>New</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Landing}></Route>
                    <Route path="/dash" exact component={Dashboard}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;