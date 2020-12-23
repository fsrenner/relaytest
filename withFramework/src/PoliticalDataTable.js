import React, { useState, useEffect } from 'react';
import DisplayTable from './DisplayTable';
import { politicalTableData } from './data/politicalTableData';

const LOCAL = 'local';
const REMOTE = 'remote';
const POLITICAL_DATA_URL = 'https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id';

export default function PoliticalDataTable() {

    const [data, setData] = useState([{
        ward: '',
        dem: '',
        rep: '',
        other_party: '',
        total: ''
    }]);
    const [source, setSource] = useState(LOCAL);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = (dataSource) => {
        if (dataSource === LOCAL) {
            setData(politicalTableData.rows);
        } else {
            fetch(POLITICAL_DATA_URL)
                .then(response => response.json())
                .then(data => setData(data.rows))
                .catch(error => setError(error));
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData(source);
    }, []);

    const onClick = () => {
        setLoading(true);
        if (source === LOCAL) {
            fetchData(REMOTE);
            setSource(REMOTE);
        } else if (source === REMOTE) {
            fetchData(LOCAL);
            setSource(LOCAL);
        }
    }
    console.log(source);
    return (
        <>
            <button onClick={onClick} disabled={loading}>Change Data Source (current source: {source})</button>
            {error ? <div>{JSON.stringify(error)}</div> : <DisplayTable rowData={data} />}
        </>
    );
}