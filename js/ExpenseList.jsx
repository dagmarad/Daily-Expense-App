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
            <td className="col-md-3">{el.date}</td>
            <td className="col-md-3">{el.category}</td>
            <td className="col-md-3">{el.name}</td>
            <td className="col-md-2">{el.price}</td>
            <td className="col-md-1"><button onClick={this.handleButtonDelete} value={index} className="btn btn-warning">Usuń</button></td>
          </tr> )
        });



        return <div>
          <h2>Historia wydatków</h2>
            <table className=" table table table-bordered">
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
