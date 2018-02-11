import React from 'react';
import ReactDOM from 'react-dom';
import products from './productList.js';
import categories from './categoryList.js';
import {PieChart} from 'react-easy-chart';
import {Legend} from 'react-easy-chart';


    class Summary extends React.Component{
      render() {
        let sumaAll = 0;
        this.props.products.forEach((el)=>{
          sumaAll+=parseInt(el.price);
        });

        categories.forEach((cat,index)=>{
          categories[index].value=0;
        });
        this.props.products.forEach((el)=>{
          categories.forEach((cat,index)=>{
            if (categories[index].key===el.category){
              categories[index].value+=parseInt(el.price);
            }
          });
        });


        return <div>

                <h2>Podsumowanie</h2>
                <table className="table table table-bordered">
                  <thead>
                    <tr>

                      <th className="col-md-3">Kategoria</th>
                      <th className="col-md-4">Suma</th>
                    </tr>
                  </thead>
                  <tbody>

                      {categories.map((cat,index)=>{
                        return <tr key={index}>
                          <td>{categories[index].key}</td>
                          <td>{categories[index].value} </td>
                        </tr>;
                      })}
                  <tr>
                    <td>Łącznie</td>
                    <td>{sumaAll}</td>
                  </tr>

                </tbody>
              </table>
              <div>


                <PieChart
                                  labels
                                  data = {categories}
                                  styles={{
                                    '.chart_text': {
                                      fontSize: '1em',
                                      fill: '#fff',
                                      values:'0',
                                    }
                                  }}
                                />



              </div>

            </div>
      }
}
export default Summary;
