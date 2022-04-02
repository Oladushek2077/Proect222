// import { COIN_FOR_URL } from "./api";
// import { API_COIN } from "./api";
// const ggq = COIN_FOR_URL
// console.log(ggq)
// console.log(API_COIN)
import { Chart, registerables } from 'chart.js';
import * as _ from 'lodash';
const pereborCoin = "BTC,ETH,XRP,ADA".split(",");
const API_COIN112 = "9698226c296e798b640d9d0c82d8bca28292a6c4444397c0426d5ea9cec3c2f7";
export const Plotting = () => {
    let sumCart = document.querySelectorAll(".chartmini");
    for(let schet = 0; schet < sumCart.length; schet++){
        let cureit_coin112 = pereborCoin[schet];
        let chart7D = [[], []];
        const URL_COIN4 = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${cureit_coin112}&tsym=USD&limit=6&extraParams=${API_COIN112}`;
        const COIN112 = () => {
            fetch(URL_COIN4).then(
                response => {
                    return response.json();
                }
            )
                .then(
                    data112 => {
                        data112.Data.Data.forEach(element => {
                            chart7D[0].push(element.close)
                        });
                        data112.Data.Data.forEach(element => {
                            chart7D[1].push(new Date(((element.time) * 1000)).toString().substr(8, 13))
                        });
                    }

                )
            return chart7D;
        }
        COIN112();
        const miChart = () => {
            const ctx = document.getElementById(`myChartmini${schet+1}`)
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: chart7D[1],
                    datasets: [{
                        yAxisID: 'y',
                        xAxisID: 'x',
                        label: 'Coin data',
                        data: chart7D[0],
                        fill: true,
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                        borderColor: ['rgba(30, 99, 132, 1)'],
                        borderWidth: 1,
                        tension: 0.1
                    }],
                    
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                      x: {
                        display: false
                      },
                      y: {
                        display: false
                      }
                    },
                },
                
            })
            
        }
        miChart();
    }
}
