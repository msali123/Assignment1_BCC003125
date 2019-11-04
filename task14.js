var a = 2, b = 1;
var result = --a - --b + b++ + b--;
// --a; result to a = 1
// --a - --b; results to a=1 b=0 res=1
// --a - --b + ++b; results to a=1 b=1 res=1
// --a - --b + ++b + b--; results to a=1 b=0 res=2

document.write("a is : "+a+"<br>");

document.write("b is : "+b+"<br>");

document.write("resul is : "+result);