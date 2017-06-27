import React from 'react';
import ReactDOM from 'react-dom';
import Summary from './Summary.jsx';
import ExpenseList from './ExpenseList.jsx';
import AddExpense from './AddExpense.jsx';
import products from './productList.js';
import categories from './categoryList.js';

document.addEventListener('DOMContentLoaded', function(){
    class App extends React.Component{

      render() {
        return <div>
                  <AddExpense/>
                    <ExpenseList products={products}/>
                    <Summary/>
                </div>;

 }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
});
