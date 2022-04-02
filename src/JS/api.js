
export const API_COIN = "9698226c296e798b640d9d0c82d8bca28292a6c4444397c0426d5ea9cec3c2f7"
export const COIN_FOR_URL = "BTC,ETH,XRP,ADA"
console.log(COIN_FOR_URL)
const URL_COIN = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${COIN_FOR_URL}&tsyms=USD&extraParams=${API_COIN}`;
import { Plotting } from "./miniChart";
import * as _ from 'lodash'
const ALL_COIN1 =  () =>{
fetch(URL_COIN).then(
    response => {
        return response.json();
    }
)
.then(
    data => {
        const bodiTab = document.querySelector("#bodiTab");
        bodiTab.innerHTML ="";
        console.log(data);
        let num = 0;
        for (let coin in data.RAW) {
            num = num + 1
            bodiTab.innerHTML +=
            `<tr>
                <td class="medialeft0"><span><span class="icon-Star"></span></span></td>
                <td style="text-align: left;" class="medialeft1">
                    <p color="text2" font-size="0" class="stilP1">${num}</p>
                </td>
                <td style="text-align: left;" class="medialeft2">
                    <div display="flex" class="nameValut">
                        <a href="#" class="cmc-link" id="opModal">
                            <div class="nameValut2"><img class="coin-logo"
                                    src="https://www.cryptocompare.com${data.RAW[coin].USD.IMAGEURL}"
                                    loading="lazy" alt="coin-logo">
                                <div class="nameValut3">
                                    <p font-weight="semibold" color="text" font-size="1"
                                        class="iworPT"></p>
                                    <div data-nosnippet="true" class="sc-1teo54s-2 abrValut">
                                        <p color="text3" class="coin-item-symbol"
                                            font-size="1">${data.RAW[coin].USD.FROMSYMBOL}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </td>
                <td>
                    <div class="priceColor"><a href="#"
                            class="cmc-link priceColor"><span>$${data.RAW[coin].USD.PRICE}</span></a></div>
                </td>
                <td style="text-align: right;"><span class=""><span
                            class="icon-Caret-up"><nobr></span>${(data.RAW[coin].USD.CHANGEPCTDAY).toFixed(2)} %</span></nobr></td>
                <td style="text-align: right;"><span class=""><span
                            class="icon-Caret-down"></span>${(data.RAW[coin].USD.CHANGEPCT24HOUR).toFixed(2)} %</span></td>
                <td style="text-align: right;">
                    <p color="text" font-size="1" class="" style="white-space: nowrap;"><span>$${new Intl.NumberFormat().format(data.RAW[coin].USD.CIRCULATINGSUPPLYMKTCAP)} B</span></p>
                </td>
                <td style="text-align: right;">
                    <div class=""><a href="#"
                            class="cmc-link priceColor">
                            <p font-size="1" class="" color="text">
                                $${data.RAW[coin].USD.TOPTIERVOLUME24HOUR}</p>
                        </a>
                        <div data-nosnippet="true">
                        <nobr><p color="text2" font-size="0" class=" stilP1">${(data.RAW[coin].USD.TOPTIERVOLUME24HOUR)/(data.RAW[coin].USD.PRICE)} ${data.RAW[coin].USD.FROMSYMBOL}</p></nobr>
                        </div>
                    </div>
                </td>
                <td style="text-align: right;">
                    <div class="" style="cursor: pointer;">
                        <div class="">
                            <nobr><p font-size="1" font-weight="medium" color="text" class="">
                                ${new Intl.NumberFormat().format(data.RAW[coin].USD.CIRCULATINGSUPPLY)} ${data.RAW[coin].USD.FROMSYMBOL}</p></nobr>
                        </div>
                        <div width="160" class="">
                            <div width="145" class=""></div>
                        </div>
                    </div>
                </td>
                <td style="text-align: right;">
                    <a href="#" class="cmc-link">
                        <div id="myChartminiContent${(num)}" class="chartmini">
                            <canvas  id="myChartmini${(num)}" ></canvas>
                        </div>
                    </a>
                </td>
            </tr>`
        };
        Plotting();
    }
)
}
export {ALL_COIN1};
