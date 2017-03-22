document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("name.json", 
            function (res) {
              var temp =
   document.getElementById("name").value;
                 
              if ( temp === res.student1) {
             
                var temp2= res.question1
               
               
              }
              else if (temp === res.student2) {
                var temp2= res.question2
                
              }
          else {
            var temp1 = "no such student";
          }
              document.querySelector("#content")
                .innerHTML = "<h2>" + temp+ "</h2>";

              document.querySelector("#content")
                .innerHTML = "<h2>" + temp2+ "</h2>";
          
           function func1() {
                  document.getElementById("rad1").checked = true;
                  document.getElementById("rad2").checked = false;
                  var display =  "<h4> The result is: Pass</h4>"; 

                  document.getElementById("content1").innerHTML = display;
                }
                
                 function func2() {
                  document.getElementById("rad1").checked = false;
                  document.getElementById("rad2").checked = true;
                  var display =  "<h4> The result is: Fail</h4>"; 

                  document.getElementById("content1").innerHTML = display;
                }
         
            });
      });
  
  }
);
