import React from 'react';
import ReactDOM from 'react-dom';
import Summary from './Summary.jsx';
import ExpenseList from './ExpenseList.jsx';
import AddExpense from './AddExpense.jsx';
import products from './productList.js';
import categories from './categoryList.js';

// /let config = {
//     apiKey: "AIzaSyClUOwRE89e2LTWCnAjPNUi36unXFmiHBY",
//     databaseURL: "https://daily-expense-app.firebaseio.com",
// };
// let app = firebase.initializeApp(config);
// let productsItem = app.database().ref('productsItem');
// productsItem.once("value").then(function(data){
// })
// productsItem.on("value", function(data) {
// console.log(data.val());
// },  function (error) {
//    console.log("Error: " + error.code);
//   });

document.addEventListener('DOMContentLoaded', function(){


class App extends React.Component{
      constructor(props) {
        super(props);
        this.state = {
          expenseName:'',//nazwa wydatku
          alertClass:"",
          expenseAmount:'',//kwota wydatku
          expenseCategory:categories[0].category,//kategoria wydatku
          expenseDate:'',//data wydatku
          expenseList:products,
          alert:'',

      }
   }
      ExpenseNameChange = (value) =>{
        this.setState({
          expenseName:value,
        })
      }
      ExpenseNumberChange = (value) =>{
        this.setState({
          expenseAmount:value,
        })
      }
      ExpenseDateChange = (value) =>{
        this.setState({
          expenseDate:value,
        })
      }
      ExpenseCategoryChange = (value) =>{
        this.setState({
          expenseCategory:value,
        })
      }

      ExpenseAdd=()=>{
        if(this.state.expenseDate==""||this.state.expenseName==""||this.state.expenseAmount==""){
          this.setState({alert:"Wypełnij wszystkie pola",
          alertClass:"red"});
        }else{
        let productItem={date: this.state.expenseDate, category: this.state.expenseCategory, name: this.state.expenseName, price:this.state.expenseAmount};

        this.setState({expenseList:this.state.expenseList.concat(productItem)});
        this.setState({alert:"Wydatek dodano", alertClass:"green"});
        this.setState({
          expenseName:'',//nazwa wydatku
          expenseAmount:'',//kwota wydatku
          expenseCategory:categories[0].category,//kategoria wydatku
          expenseDate:'',//data wydatku
        });

        //  productsItem.push({
        //   name:productItem.name,
        //   date:productItem.date,
        //   category:productItem.category,
        //  price:productItem.price,
        // });

      }
    }

    ExpenseDelete = (element)=>{
      let copyTable=this.state.expenseList;
      copyTable.splice(element,1);
      this.setState({
        expenseList:copyTable,
        alert:"Wydatek usunięto",
        alertClass:"blue"
      });

    }


      render() {

        return <div className="container">
                  <AddExpense  expenseName={this.state.expenseName} onExpenseNameChange={this.ExpenseNameChange}
                     expenseAmount={this.state.expenseAmount} onExpenseNumberChange={this.ExpenseNumberChange}
                     expenseCategory={this.state.expenseCategory} onExpenseCategoryChange={this.ExpenseCategoryChange}
                     expenseDate={this.state.expenseDate} onExpenseDateChange={this.ExpenseDateChange}
                      onExpenseAdd={this.ExpenseAdd}/>
                    <p className={this.state.alertClass}>{this.state.alert}</p>
                    <ExpenseList products={this.state.expenseList} onExpenseDelete={this.ExpenseDelete} productsItem={this.state.productsItem}/>
                    <Summary/>

                </div>;
  }
}

ReactDOM.render(
    <App categories={categories} products={products} />,
    document.getElementById('app')
);
});
