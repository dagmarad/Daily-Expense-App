import React from 'react';
import ReactDOM from 'react-dom';
import categories from './categoryList.js';



    class AddExpense extends React.Component{

      handleNameChange = (event) => {
        if(typeof this.props.onExpenseNameChange==='function'){
          const value = event.target.value;
          this.props.onExpenseNameChange(value);
      };
    }
    handleAmountChange = (event) => {
      if(typeof this.props.onExpenseNumberChange==='function'){
        const valueAmount = event.target.value;
        this.props.onExpenseNumberChange(valueAmount);
    };
  }
  handleDateChange = (event) => {
    if(typeof this.props.onExpenseDateChange==='function'){
      const valueDate = event.target.value;
      this.props.onExpenseDateChange(valueDate);
  };
}
handleCategoryChange = (event) => {
  if(typeof this.props.onExpenseCategoryChange==='function'){
    const valueCategory = event.target.value;
    this.props.onExpenseCategoryChange(valueCategory);
 }
}

handleButtonClick =()=>{
  this.props.onExpenseAdd();
}

      render() {
        var categoriesList = [];
        categories.forEach((el,index)=>{
          categoriesList.push(
            <option value={categories[index].key} key={index}>{categories[index].key}</option>);
          });

        return <div>
          <h2>Dodaj wydatek</h2>
          <table className="table">
            <thead>
            <tr>
              <th><span className= "glyphicon glyphicon-calendar"></span> Data</th>
              <th><span className="glyphicon glyphicon-tasks"></span> Kategorie</th>
              <th><span className="glyphicon glyphicon-inbox"></span>Wydatek</th>
              <th><span className="glyphicon glyphicon-piggy-bank"></span> Kwota</th>
              <th>Akcja</th>

            </tr>

          </thead>
          <tbody>
            <tr>
              <td><input className="form-control" type="date" value={this.props.expenseDate} onChange={this.handleDateChange}/></td>
              <td ><select className="form-control" value={this.props.expenseCategory?this.props.expenseCategory:categories[0].key} onChange={this.handleCategoryChange}  >
                {categoriesList}
              </select></td>

            <td><input className="form-control" type="text" value={this.props.expenseName} onChange={this.handleNameChange}/></td>
              <td ><input  className="form-control"type="number" value={this.props.expenseAmount} onChange={this.handleAmountChange}></input></td>
              <td ><button onClick={this.handleButtonClick} className="btn btn-info">Dodaj</button></td>
            </tr>
          </tbody>
          </table>
            </div>
      }
}
export default AddExpense;
