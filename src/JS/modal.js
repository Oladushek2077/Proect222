import { dataCenacoinD, dataCenacoinT } from './chartdata';
import { Chart, registerables } from 'chart.js';
import * as _ from 'lodash';
const modal = document.querySelector("#myModal");
const tbody = document.querySelector("#bodiTab");
const funModal = () => {
    tbody.addEventListener("click", function (event) {
        let coin = event.target.closest("div").querySelector(".coin-item-symbol")
        const coinVal = coin.innerText;
        const API_COIN = "9698226c296e798b640d9d0c82d8bca28292a6c4444397c0426d5ea9cec3c2f7";
        const URL_COIN2 = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinVal}&tsyms=USD&extraParams=${API_COIN}`;
        const ALL_COIN2 = () => {
            fetch(URL_COIN2).then(
                response => {
                    return response.json();
                }
            )
                .then(
                    data => {
                        for (let coin in data.RAW) {
                            if (event.target.closest("A")) {
                                const modalset = () => {
                                    const mymod = document.querySelector("#myModal");
                                    mymod.innerHTML = "";
                                    mymod.innerHTML = `
                                <div id="modalCont" class="modalCont">
                                    <span class="close" id="close1">&times;</span>
                                    <div id="modalHedCont" class="modalHedCont">
                    
                                    <div class="nameSection">
                                            <div class="nameHeader"><img src="https://www.cryptocompare.com${data.RAW[coin].USD.IMAGEURL}"
                                                    height="32" width="32" alt="coin">
                                                <h2 class="modelh1" color="text">${data.RAW[coin].USD.FROMSYMBOL}</h2>
                                            </div>
                                        </div>
                                        <div class="priceSection">
                                            <div class="priceTitle">
                                                <div class="priceValue "><span>$${data.RAW[coin].USD.PRICE}</span></div><span
                                                    style="font-size:14px;font-weight:600;padding:5px 10px"
                                                    class="feeyND"><span class="icon-Caret-down"></span>${(data.RAW[coin].USD.CHANGEPCTHOUR).toFixed(2)}<!-- -->%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <canvas id="myChart" style="height: 100%; width: 100%;"></canvas>
                                    </div>
                                    <div class="modalHedCont2">
                                        <div class="convector">
                                            <div class="">
                                                <div style="overflow:hidden" class="convectorVnut">
                                                    <div style="order:1" class="convValuta"><img
                                                            src="https://www.cryptocompare.com${data.RAW[coin].USD.IMAGEURL}" alt="" class="iconValuta">
                                                        <div class="modalHedCont">
                                                            <p font-size="1" font-weight="500" class="valutaName" color="text">${data.RAW[coin].USD.FROMSYMBOL}</p>
                                                        </div>
                                                        <div class="inputValut"><input type="number" value="" pattern="/^-?d+.?d*$/" placeholder="0" id="inmp1"></div>
                                                    </div>
                                                    <div style="order:2" class="convValuta2">
                                                        <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg" alt="" class="iconValuta">
                                                        <div class="modalHedCont">
                                                            <p font-size="11px" color="text2" class="valutaName">USD</p>
                                                        </div>
                                                        <div class="inputValut"><input type="number" value="" pattern="/^-?d+.?d*$/" placeholder="0" id="inmp2"></div>
                                                    </div>
                                                    <img src="https://s2.coinmarketcap.com/static/cloud/img/converter.png?_=db0247b">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
                                    const inmp1 = document.getElementById("inmp1");
                                    const inmp2 = document.getElementById("inmp2");
                                    inmp1.oninput = function () {
                                        inmp2.value = (inmp1.value * data.RAW[coin].USD.PRICE)
                                    }
                                    inmp2.oninput = function () {
                                        inmp1.value = (inmp2.value / data.RAW[coin].USD.PRICE)
                                    }
                                    const ctx = document.getElementById('myChart').getContext('2d');
                                    let myChart = new Chart(ctx, {
                                        type: 'line',
                                        data: {
                                            labels: dataCenacoinT,
                                            datasets: [{
                                                label: '# of Votes',
                                                data: dataCenacoinD,
                                                fill: true,
                                                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                                                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                                                borderWidth: 1,
                                                tension: 0.1
                                            }],
                                        },
                                        options: {
                                            plugins: {
                                                zoom: {
                                                    zoom: {
                                                        wheel: {
                                                            enabled: true,
                                                        },
                                                        pinch: {
                                                            enabled: true,
                                                        },
                                                        mode: 'xy',
                                                    },
                                                },
                                            },
                                        },
                                    })
                                    modal.style.display = "block";
                                    
                                }
                                modalset();
                            }
                        }
                        const clos = document.getElementById("close1");
                        clos.onclick = function () {
                            modal.style.display = "none";
                        }
                    }
                )
        }
        ALL_COIN2();
    });
}
export { funModal };