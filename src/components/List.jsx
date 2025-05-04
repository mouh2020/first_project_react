import React from 'react'
import Data from "../data"

function List() {
    const products_list = Data.map(function(elt) {
        return (
            <li key={elt.id}>{elt.title}</li>
        );
    });

    return (
        <ul>
            {products_list}
        </ul>
    );
}

export default List
