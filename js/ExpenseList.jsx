import React from 'react';
import ReactDOM from 'react-dom';
import products from './productList.js';


    class ExpenseList extends React.Component{
      render() {
        let rows = [];
        products.forEach((el,index)=>{
          rows.push( <tr key={index}>
            <td>{el.date}</td>
            <td>{el.category}</td>
            <td>{el.name}</td>
            <td>{el.price}</td>
            <td><button>Usuń</button></td>
          </tr> )

        });

        return <div>
          <h2>Historia wydatków</h2>
            <table className="table">
              <thead>
              <tr>
                <th>Data</th>
                <th>Kategorie</th>
                <th>Nazwa wydatku</th>
                <th>Kwota w złotych</th>
                <th>Akcja</th>
              </tr>
              </thead>
              <tbody>
              {rows}
              </tbody>
             </table>
            </div>
      }
}
export default ExpenseList;
