

// Q6 generate random Number and user gusess

let ran;
let user;
let i=0,n;
alert("User guessing Game Let's Started");
do{
    n=100-i++;
    ran=Math.floor((Math.random()*10)+1);
    user=prompt("Enter a Number between 1-10 "+" You have "+n+" guesses");

}while(user!=ran && n!=0);
if(n==0)
{
    alert("You Lost")
}
else{
    alert("Your Score is "+n);
}

