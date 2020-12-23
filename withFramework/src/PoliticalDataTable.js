import React, { useState, useEffect } from 'react';
import DisplayTable from './DisplayTable';
import { politicalTableData } from './data/politicalTableData';

const LOCAL = 'local';
const POLITICAL_DATA_URL = 'https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id';

export default function PoliticalDataTable({ source }) {

    const [data, setData] = useState([{
        ward: '',
        dem: '',
        rep: '',
        other_party: '',
        total: ''
    }]);

    const [error, setError] = useState('')

    useEffect(() => {
        if (source === LOCAL) {
            setData(politicalTableData.rows);
        } else {
            fetch(POLITICAL_DATA_URL)
                .then(response => response.json())
                .then(data => setData(data.rows))
                .catch(error => setError(error));
        }
    }, []);

    return error ? <div>{JSON.stringify(error)}</div> : <DisplayTable rowData={data} />
}