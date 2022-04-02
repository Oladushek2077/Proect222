const burgerFun = () =>{
    const burgerSect = document.querySelector("#burgerOpen");
    const crestSext = document.querySelector("#burgerClose");
    const spisok = document.querySelector("#ulNowigator");

    burgerSect.addEventListener("click", function(event){
        let openburger = document.getElementsByClassName("navigator");
        if(event.target.closest ("div").querySelector(".burgersvg")){
            openburger[0].style.right = "0";
        }
        
    });

    crestSext.addEventListener("click", function(even){
        let closeburger = document.getElementsByClassName("navigator");
        if(even.target.closest ("div").querySelector(".burgerkrest")){
            closeburger[0].style.right = "100%";
        }
        
    });
    let trig = 0;
    spisok.addEventListener("click", function(even){
        if(even.target.closest ("li").querySelector(".lizaglav") && (trig === 0)){
            let targetLii = even.target.closest ("li").querySelector(".lizaglav");
            let licontent = targetLii.nextElementSibling;
            licontent.style.height = "100px";
            trig = 1;

        }else if(even.target.closest ("li").querySelector(".lizaglav") && (trig === 1)){
            let targetLii = even.target.closest ("li").querySelector(".lizaglav");
            let licontent = targetLii.nextElementSibling;
            licontent.style.height = "0px";
            trig = 0;
        }
    });
}
export {burgerFun};
