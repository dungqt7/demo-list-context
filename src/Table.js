import React, {Component} from 'react';
import ListContext from './context';
class Table extends Component {
    render() {
        return (
         <div>
             <ListContext.Consumer>
              
             </ListContext.Consumer>
         </div>
        )
    }
}
export default Table;