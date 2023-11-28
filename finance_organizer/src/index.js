import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import About from './Pages/About/About';
import GetLastTransaction from './Pages/GetLastTransaction/GetLastTransaction';
import GetExpensesForThisYear from './Pages/GetExpensesForThisYear/GetExpensesForThisYear';
import GetExpensesForThisMonth from './Pages/GetExpensesForThisMonth/GetExpensesForThisMonth';
import GetExpensesForSpecificYear from './Pages/GetExpensesForSpecificYear/GetExpensesForSpecificYear';
import GetExpensesForSpecificPeriod from './Pages/GetExpensesForSpecificPeriod/GetExpensesForSpecificPeriod';
import GetExpensesForSpecificMonth from './Pages/GetExpensesForSpecificMonth/GetExpensesForSpecificMonth';
import GetExpensesForLastWeek from './Pages/GetExpensesForLastWeek/GetExpensesForLastWeek';
import AddTransaction from './Pages/AddTransaction/AddTransaction';
import Error from './Pages/Error/Error';
import './global.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet
} from 'react-router-dom';

const Root = () => {
    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    );
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Welcome />} />
            <Route path="/AddTransaction" element={<AddTransaction />} />
            <Route path="/GetLastTransaction" element={<GetLastTransaction />} />
            <Route path="/GetExpensesForLastWeek" element={<GetExpensesForLastWeek />} />
            <Route path="/GetExpensesForThisMonth" element={<GetExpensesForThisMonth />} />
            <Route path="/GetExpensesForThisYear" element={<GetExpensesForThisYear />} / >
            <Route path="/GetExpensesForSpecificMonth" element={<GetExpensesForSpecificMonth />} />
            <Route path="/GetExpensesForSpecificYear" element={<GetExpensesForSpecificYear />} / >
            <Route path="/GetExpensesForSpecificPeriod" element={<GetExpensesForSpecificPeriod />} / >        
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
);
