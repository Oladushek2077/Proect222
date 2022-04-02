const tbody = document.querySelector("#bodiTab");

export const cenacoinD = () =>{
    let masiwdatacena = [];
    tbody.addEventListener("click", function(event){
        masiwdatacena.length = 0;
        if (event.target.closest ("A")){
            let coin = event.target.closest ("div").querySelector(".coin-item-symbol");
            const coinVal = coin.innerText;
            const API_COIN3 = "9698226c296e798b640d9d0c82d8bca28292a6c4444397c0426d5ea9cec3c2f7"
            const URL_COIN3 = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${coinVal}&tsym=USD&limit=23&extraParams=${API_COIN3}`;

            const cureit_COIN =  () =>{
                fetch(URL_COIN3).then(
                    response => {
                        return response.json();
                    }
                )
                .then(
                    data1 => {
                        data1.Data.Data.forEach(element => {
                           masiwdatacena.push(element.close);
                        });
                    }
                )
            }
            cureit_COIN();
        }
    });
    return masiwdatacena
}
export let dataCenacoinD = cenacoinD();
export const cenacoinT = () =>{
    let masiwdatacenaDay = [];
    tbody.addEventListener("click", function(event){
        masiwdatacenaDay.length = 0;
        if (event.target.closest ("A")){
            let coin = event.target.closest ("div").querySelector(".coin-item-symbol")
            const coinVal = coin.innerText
            const API_COIN3 = "9698226c296e798b640d9d0c82d8bca28292a6c4444397c0426d5ea9cec3c2f7"
            const URL_COIN3 = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${coinVal}&tsym=USD&limit=23&extraParams=${API_COIN3}`;

            const cureit_COIN =  () =>{
                fetch(URL_COIN3).then(
                    response => {
                        // console.log(response.json())
                        return response.json();
                    }
                )
                .then(
                    data2 => {
                        data2.Data.Data.forEach(element => {
                            masiwdatacenaDay.push(new Date(((element.time)*1000)).toString().substr(8, 13))
                        });
                    }
                )
            }
            cureit_COIN();
        }
    });
    return masiwdatacenaDay;
}
export let dataCenacoinT = cenacoinT();

