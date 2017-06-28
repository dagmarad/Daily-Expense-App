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
              <td><input type="date" value={this.props.expenseDate} onChange={this.handleDateChange}/></td>
              <td><select value={this.props.expenseCategory} onChange={this.handleCategoryChange}  >
                {categoriesList}
              </select></td>

            <td><input type="text" value={this.props.expenseName} onChange={this.handleNameChange}/></td>
              <td><input type="number" value={this.props.expenseAmount} onChange={this.handleAmountChange}></input></td>
              <td><button onClick={this.handleButtonClick}>Dodaj</button></td>
            </tr>
          </tbody>
          </table>
            </div>
      }
}
export default AddExpense;
