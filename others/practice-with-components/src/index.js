import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Main from './Pages/Main/Main';
import Sidebar from './Pages/Sidebar/Sidebar';
import './global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container">
        <Header />
        <Main />
        <Sidebar />
        <Footer />
    </div>
);
