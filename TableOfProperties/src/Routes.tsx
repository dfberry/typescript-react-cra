import React from 'react';
import {
    Routes,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import TableProperties from './components/TableProperties';

import {
    json1
} from './data/jsonProperties';

type Props = {
    children?: React.ReactNode
};
type ObjectPair = {[index: string]:any};
const AppRoutes: React.FC<Props> = ({ children }) => {

    const data1: ObjectPair = json1;

    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<TableProperties data={data1}/>} />
            </Routes>
        </Router>)
}

export default AppRoutes;