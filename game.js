

// Q6 generate random Number and user gusess


let ran;
let user;
let i=0,n;
ran=Math.floor((Math.random()*100)+1);
alert("User guessing Game Let's Started");
const fun=(a)=>{
do{
    n=100-i++;
    user=prompt("Enter a Number between 1-100 "+" You have "+n+" guesses");
    if(user>ran)
    {
        alert("Too High!!!!! Try again")
    }
    else if(user<ran)
    {
        alert("Too Low!!!!! Try again")
    }
}while(user!=ran && n!=0);
if(n==0)
{
    alert("You Lost")
}
else{
    alert("Your Score is "+n);
    let w=confirm("Do you want to play Again");
    if(w){
        fun(1);
    }
}
}
fun(1);

