import React from 'react';
import ReactDOM from 'react-dom';
import products from './productList.js';
import categories from './categoryList.js';


    class Summary extends React.Component{
      render() {
        let sumaAll = 0;
        products.forEach((el)=>{
          sumaAll+=parseInt(el.price);
        });

      categories.forEach
        let sum = {};
        products.forEach((el,index)=>{
          if(typeof sum[el.category]==="undefined"){
            sum[el.category]=0;
          }
            sum[el.category]+=parseInt(el.price)
        });//korzystajac potem z wartosci {sum["Rozrywka"]}
        // dodaje sumy dla poszczegolnych kategorii

        return <div>
                <h2>Podsumowanie</h2>
                <table className="table">
                  <thead>
                    <tr>
                      
                      <th>Kategoria</th>
                      <th>Suma</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>

                    <td>Jedzenie</td>
                    <td>{sumaAll}</td>
                  </tr>
                <tr>

                    <td>Rozrywka</td>
                    <td>{sum["Rozrywka"]}</td>
                  </tr>
                  <tr>

                      <td>Bilety</td>
                      <td>{sum["Bilety"]}</td>
                    </tr>
                  <tr>

                    <td>Łącznie</td>
                    <td>{sumaAll}</td>
                  </tr>

                </tbody>
              </table>
            </div>
      }
}
export default Summary;
