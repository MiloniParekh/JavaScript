// Event handling
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

   
    document.getElementById("false").checked = false;
                 
              if ( temp === res.student1) {
             
                var temp1= "<h3>Question 1: " + res.question1 "</h3>";
                 document.querySelector("#content")
                .innerHTML = temp1;
                 function(true){
                      document.getElementById("true").checked = true;
                      document.getElementById("false").checked = false;
                      var display =  "<h4> The result is: Pass</h4>"; 

                      document.getElementById("demo2").innerHTML = display; 
  
                       }
                function(false){
                      document.getElementById("true").checked = false;
                      document.getElementById("false").checked = true;
                      var display =  "<h4> The result is: Fail</h4>"; 

                      document.getElementById("content2").innerHTML = display; 
  
                      }
              }
              else if (temp === res.student2) {
               
                var temp2= "<h3>Question 2: " + res.question2 "</h3>";
                 document.querySelector("#content")
                .innerHTML = temp2;
                 function(true){
                      document.getElementById("true").checked = true;
                      document.getElementById("false").checked = false;
                      var display =  "<h4> The result is: Fail</h4>"; 

                      document.getElementById("content2").innerHTML = display; 
  
                       }
                function(false){
                      document.getElementById("true").checked = false;
                      document.getElementById("false").checked = true;
                      var display =  "<h4> The result is: Pass</h4>"; 

                      document.getElementById("demo2").innerHTML = display; 
  
                      }
              }
          else {
            var temp3 = "no such student";
          }
          
        
            });
      });
 
   
);
