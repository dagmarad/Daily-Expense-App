import React from 'react';
import ReactDOM from 'react-dom';


    class ExpenseList extends React.Component{
          handleButtonDelete=(event)=>{
            const valueDelete=event.target.value;
            this.props.onExpenseDelete(valueDelete);
              }

      render() {

        let rows = [];
        this.props.products.forEach((el,index)=>{
          rows.push( <tr key={index}>
            <td>{el.date}</td>
            <td>{el.category}</td>
            <td>{el.name}</td>
            <td>{el.price}</td>
            <td><button onClick={this.handleButtonDelete} value={index}>Usuń</button></td>
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
