import React from 'react';
import PoliticalDataTable from './PoliticalDataTable';

export default function App() {
    return(
        <div>
            <PoliticalDataTable source="remote"/>
        </div>
    );
}