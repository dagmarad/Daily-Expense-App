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

        categories.forEach
        let sum = {};
        this.props.products.forEach((el,index)=>{
           if(typeof sum[el.category]==="undefined"){
             sum[el.category]=0;
         }
            sum[el.category]+=parseInt(el.price)
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
                  <tr>
                    <td>Jedzenie</td>
                    <td>{sum["Jedzenie"]} </td>
                  </tr>

                  <tr>
                    <td>Napoje</td>
                    <td>{sum["Napoje"]}</td>
                  </tr>
                  <tr>
                    <td>Kultura</td>
                    <td>{sum["Kultura"]}</td>
                  </tr>


                <tr>
                    <td>Rozrywki</td>
                    <td>{sum["Rozrywki"]}</td>
                  </tr>
                  <tr>
                      <td>Podróże</td>
                      <td>{sum["Podróże"]}</td>
                    </tr>
                    <tr>
                        <td>Alkohol</td>
                        <td>{sum["Alkohol"]}</td>
                      </tr>
                    <tr>
                      <td>Sport</td>
                      <td>{sum["Sport"]}</td>
                        </tr>
                      <tr>
                        <td>Zdrowie</td>
                        <td>{sum["Zdrowie"]}</td>
                      </tr>
                  <tr>
                    <td>Łącznie</td>
                    <td>{sumaAll}</td>
                  </tr>

                </tbody>
              </table>
              <div>



                <PieChart
                  labels
                  data={[
                    {key: 'Podróże', value:sum["Podróże"], default : 0, color: '#aaac84'},
                    {key: 'Jedzenie', value: sum["Jedzenie"] , color: '#dce7c5'},
                    {key: 'Napoje', value: sum["Napoje"] , color: '#e3a51a'},
                    {key: 'Rozrywki', value: sum["Rozrywki"] , color: '#4286f4'},
                    {key: 'Alkohol', value: sum["Alkohol"] , color: 'blue'},
                    {key: 'Sport', value: sum["Sport"] , color: 'red'},
                    {key: 'Kultura', value: sum["Kultura"] , color: 'green'},
                    {key: 'Zdrowie', value: sum["Zdrowie"] , color: 'grey'},
                  ]}
                  styles={{
                    '.chart_text': {
                      fontSize: '1em',
                      fill: '#fff'
                    }
                  }}
                />


              </div>

            </div>
      }
}
export default Summary;
