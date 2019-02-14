import React from 'react';
import ListContext from './context';

function Table() {
    return (
    
        <div>
            <ListContext.Consumer>
             {
                 value =>  value.map(v => <h1 key={v.id}>{v.name}</h1>)
            }
            </ListContext.Consumer>
           
        </div>
    )
}
export default Table;