import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './Router';

const App = () => {
    return (
        <div>
            <Router>
                <BaseRouter />
            </Router>
        </div>
    );
};

export default App;