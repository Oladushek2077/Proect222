const API_COIN = "9698226c296e798b640d9d0c82d8bca28292a6c4444397c0426d5ea9cec3c2f7"
const URL_COIN = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP&tsyms=USD&extraParams=${API_COIN}`;

const ALL_COIN1 =  () =>{
fetch(URL_COIN).then(
    response => {
        // console.log(response.json())
        return response.json();
    }
)
.then(
    data => {
        console.log(data)
        console.log(data.RAW.BTC.USD.PRICE)
        console.log(data.RAW.BTC.USD.PRICE)
    }
)
}
ALL_COIN1()
