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
            <option value={el.category} key={index}>{el.category}</option>);
          });

        return <div>
          <h1>Kalendarz wydatków</h1>
          <h2>Dodaj wydatek</h2>
          <table className="table table-bordered">
            <thead>
            <tr>
              <th><span className= "glyphicon glyphicon-calendar"></span> Data</th>
              <th><span className="glyphicon glyphicon-tasks"></span> Kategorie</th>
              <th><span className="glyphicon glyphicon-inbox"></span> Nazwa wydatku</th>
              <th><span className="glyphicon glyphicon-piggy-bank"></span> Kwota w złotych</th>
              <th>Akcja</th>

            </tr>

          </thead>
          <tbody>
            <tr>
              <td  className="col-md-3"><input className="form-control" type="date" value={this.props.expenseDate} onChange={this.handleDateChange}/></td>
              <td  className="col-md-3"><select className="form-control" value={this.props.expenseCategory} onChange={this.handleCategoryChange}  >
                {categoriesList}
              </select></td>

            <td  className="col-md-3"><input className="form-control" type="text" value={this.props.expenseName} onChange={this.handleNameChange}/></td>
              <td  className="col-md-2"><input  className="form-control"type="number" value={this.props.expenseAmount} onChange={this.handleAmountChange}></input></td>
              <td  className="col-md-1"><button onClick={this.handleButtonClick} className="btn btn-info">Dodaj</button></td>
            </tr>
          </tbody>
          </table>
            </div>
      }
}
export default AddExpense;
