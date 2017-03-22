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
             
                var temp1= "Question 1: " + res.question1
               
              }
              else if (temp === res.student2) {
               
                var temp2= "Question 2: " + res.question2
              }
          else {
            var temp3 = "no such student";
          }
              document.querySelector("#content")
                .innerHTML = "<h2>" + temp+ "</h2>";

              document.querySelector("#content")
                .innerHTML = "<h2>" + temp1+ "</h2>";
          document.querySelector("#content1")
                .innerHTML = "<h2>" + temp2+ "</h2>";
            });
      });
  
  }
);
