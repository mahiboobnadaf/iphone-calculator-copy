

let ptag=document.querySelector("p.display")
let count=ptag.innerText
console.log(count)
if (count==0){
    count=''
}
let new_count=''

function show(x){
   console.log(typeof(count))
    new_count=count+=x
    ptag.innerText=`${count}`    
}
function reset(){
    count=''
    // x=0
    new_count='0'
    ptag.innerText=`${new_count}`
}

function p_or_m(){
    count*=-1
    ptag.innerText=`${count}`
}

function percent(){
    count=count/100;
    ptag.innerText=`${count}`

}



function calculate(){
    console.log(new_count)
    let res=eval(new_count)
    console.log(typeof new_count)
    new_count=count=res
    if(res==Infinity){
        res='Error'
        ptag.innerText=`${res}`
    }
    ptag.innerText=`${res}`
}

// function audioo(){
//     document.getElementById("audio").play();
// }

let ac = document.querySelector(".ac_id")
ac.addEventListener('click',()=> reset())

//plus or minus id

let p_OR_m=document.querySelector(".or_id")
p_OR_m.addEventListener('click',()=>p_or_m())

//percentage
let parcentt=document.querySelector(".percent_id")
parcentt.addEventListener("click",()=>percent())

//dividing

let deviding=document.querySelector(".divid_id")
deviding.addEventListener('click',()=>show('/'));

//Multiplication

let multi=document.querySelector(".mul_id");
multi.addEventListener("click",()=>show('*'));

//Minus

let minuss=document.querySelector(".minus_id");
minuss.addEventListener("click",()=>show('-'));

//addition

let add=document.querySelector(".plus_id");
add.addEventListener("click",()=>show('+'));


//Numbers

let nums=document.querySelectorAll('.num')

console.log(nums);

for(let a of nums){
    // console.log(a)
    console.log(a.innerText)

    a.addEventListener('click',()=>show(a.innerText))
}



