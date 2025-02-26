let morebtn = document.querySelector("#morebtn");
let headerbtn = document.querySelector("#headerbtn");
let header2 =document.querySelector("#header2");
more ="off";
// morebtn.addEventListener("click",()=>
// {
//     console.log("More button was clicked");
// });
morebtn.addEventListener("click",()=>{
    if(more==="off"){
        on();
    }else{
        off();
    }
})
function on(){
    console.log("More button is On");
    header2.style.translate="0vw";
    more="on";
}
function off(){
    console.log("More button is Off");
    header2.style.translate="-70vw";
    more="off";
}