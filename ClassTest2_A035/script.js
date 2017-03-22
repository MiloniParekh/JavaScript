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

   document.getElementById("true").checked = true;
    document.getElementById("false").checked = false;
                 
              if ( temp === res.student1) {
             
                var temp1= "<h3>Question 1: " + res.question1 "</h3>";
                 document.querySelector("#content")
                .innerHTML = temp1;
              }
              else if (temp === res.student2) {
               
                var temp2= "<h3>Question 2: " + res.question2 "</h3>;
                 document.querySelector("#content")
                .innerHTML = temp2;
              }
          else {
            var temp3 = "no such student";
          }
          
         re
            });
      });
  
  }
);
