import React from 'react';

export default function DisplayTable({ rowData }) {
    console.log(rowData);
    return (
        <>
        <h1>Philadelphia Qualified Voter Listing 2018</h1>
        <table>
            <thead>
                <tr>
                    <th>Ward</th>
                    <th>Democrat</th>
                    <th>Republican</th>
                    <th>Other Party</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
            {
                rowData.map((item, key) => {
                    return (
                        <tr key={key}>
                            <td>{item.ward}</td>
                            <td>{item.dem}</td>
                            <td>{item.rep}</td>
                            <td>{item.other_party}</td>
                            <td>{item.total}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </>
    );
}