const button=document.querySelector("#button").addEventListener("click",colour)
const button1=document.querySelector("#button1").addEventListener("click",random)
const button2=document.querySelector("#button2").addEventListener("click",hello)
const Result=document.querySelector("#Result")

let input=document.querySelector("#input").value
function colour(){
    input--;
    console.log(input , "rtry");
    document.querySelector("#input").value=input
}

function random(){
    input++;
    console.log(input,"abc");
    document.querySelector("#input").value=input
}

function hello(){
    console.log(input,"qrs");
    document.querySelector("#input").value=0
    Result.innerHTML=input
}

