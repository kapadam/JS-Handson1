const AddTwoNumbers = (a,b) => {
    return a+b
};  
AddTwoNumbers(3,4);

const Is_Valid = (a,b) => {
    if((a<10) && (a>b)){
        return true;
    }
    else {
        return false;
    }
};
Is_Valid(3,4);

const Check = (A, B) => 
    {
      var d=false;
      var c=true;
      if(A%10==0 && B%10==0){
        return c
      } 
      else if(A%10!=0 && B%10!=0){
        return d
      }
      else if (A%10==0 || B%10==0){
        return c
      }
      else {
        return d
      }
    };
Check(40,60);

const First_Digit = (n) => {
    let a=n/1000;
    return(Math.floor(a));
};
First_Digit(3456);

const Last_Digit = (n) => {
    return n%10; 
};
Last_Digit(3456);

const Find_the_remainder = (a,b) => {
    var c=b%a;
    return c;
};
Find_the_remainder(5,10);

const Multiply_two_number = (a,b) => {
    var c=a*b;
    return c;
};
Multiply_two_number(5,6);

const Sum = (A, B, C) => {
    let sum=A+B+C;
    return sum;
};  
const Average = (A, B, C) => {
    let avg=(A+B+C)/3;
    return avg;
};
Sum(50,45,49);
Average(50,45,49);