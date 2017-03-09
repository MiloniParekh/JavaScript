function sum() 
{ 
    document.getElementById("add").checked = true;
    document.getElementById("subtract").checked = false;
    document.getElementById("multiply").checked = false;
    document.getElementById("divide").checked = false;
    var a, b, result, display; 
    a = parseInt(document.getElementById("n1").value, 10);
    b = parseInt(document.getElementById("n2").value, 10);
    result = (a+b);
    display =  "<h4> The result is: " + result + "</h4>"; 

    document.getElementById("demo2").innerHTML = display; 
}

function diff() 
{ 
    document.getElementById("subtract").checked = true;
    document.getElementById("add").checked = false;
    document.getElementById("multiply").checked = false;
    document.getElementById("divide").checked = false;
    var a, b, result, display; 
    a = parseInt(document.getElementById("n1").value, 10);
    b = parseInt(document.getElementById("n2").value, 10);
    result =  (a-b); 
    display =  "<h4> The result is: " + result + "</h4>"; 

    document.getElementById("demo2").innerHTML = display; 
}

function product() 
{ 
    document.getElementById("multiply").checked = true;
    document.getElementById("add").checked = false;
    document.getElementById("subtract").checked = false;
    document.getElementById("divide").checked = false;
    var a, b, result,display; 
    a = parseInt(document.getElementById("n1").value, 10);
    b = parseInt(document.getElementById("n2").value, 10);
    result =  (a*b); 
    display =  "<h4> The result is: " + result + "</h4>"; 

    document.getElementById("demo2").innerHTML = display; 
}

function quotient() 
{ 
    document.getElementById("divide").checked = true;
    document.getElementById("add").checked = false;
    document.getElementById("subtract").checked = false;
    document.getElementById("multiply").checked = false;
    var a, b, result, display; 
    a = parseInt(document.getElementById("n1").value, 10);
    b = parseInt(document.getElementById("n2").value, 10);
    result =  (a/b); 
    display =  "<h4> The result is: " + result + "</h4>"; 

    document.getElementById("demo2").innerHTML = display; 
}
