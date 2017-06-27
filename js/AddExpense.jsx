import React from 'react';
import ReactDOM from 'react-dom';
import categories from './categoryList.js';



    class AddExpense extends React.Component{


      render() {
        var categoriesList = [];
        categories.forEach((el,index)=>{
          categoriesList.push(
            <option value={index} key={index}>{el.category}</option>);
          });

        return <div>
          <h1>Kalendarz wydatków</h1>
          <h2>Dodaj wydatek</h2>
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
            <tr>
              <td><input type="date"></input></td>
              <td><select>
                {categoriesList}
              </select></td>
            <td><input type="text"/></td>
              <td><input type="number"></input></td>
              <td><button>Dodaj</button></td>
            </tr>
          </tbody>
          </table>
            </div>
      }
}
export default AddExpense;
