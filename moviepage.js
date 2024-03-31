var express = require('express'); //Install express
var app = express();

var averageRate = 0;
var idCounter = 0; //Sets individual ID to each user so they can only rate once

app.post('/post', (req, res) => {

    //print info to console
    console.log("New express client");
    console.log("Query received: ");
    console.log(JSON.parse(req.query['data']));

    //populate a header response
    res.header("Access-Control-Allow-Origin", "*");
    var queryInfo = JSON.parse(req.query['data']);

    if (queryInfo['click'] == 'updateRate') { //Checks if click is associated with updateRate, so its not confused with menu
        
        //Generates ID for user
        idCounter++;
        var nameID = "user" + idCounter;

        // prepare the response
        var jsontext = JSON.stringify({
            'click': 'updateRate',
        });

        // send the response to the client	
        res.send(jsontext);
    } 
}).listen(3000);

document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var menuOptions = document.querySelector('.menu-options');

    menuIcon.addEventListener('click', function() {
        menuOptions.classList.toggle('active');
    });

    const stars = document.querySelectorAll(".stars i");

            stars.forEach((star, index) => {
                star.addEventListener('click', function() {
                    // Add your logic here when a star is clicked
                    // For example, you can call a function like 'updateRate' passing the index
                    updateRate(index + 1); // index is zero-based, so add 1 to get the correct rating
            });
    });

});

 // Select all elements with the "i" tag and store them in a NodeList called "stars"
 const stars = document.querySelectorAll(".stars i");
 // Loop through the "stars" NodeList
 stars.forEach((star, index1) => {
   // Add an event listener that runs a function when the "click" event is triggered
   star.addEventListener("click", () => {
     // Loop through the "stars" NodeList Again
     stars.forEach((star, index2) => {
       // Add the "active" class to the clicked star and any stars with a lower index
       // and remove the "active" class from any stars with a higher index
       index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
     });
     star.addEventListener('dblclick', () => {
        stars.forEach((star) => {
            // Remove the "active" class from each star
            star.classList.remove("active");
        });
    });
   });
   stars.forEach((star) => {
});
});

//Updates average rating
function updateRate(num) {
    averageRate += num;
    updateAverageRateDisplay();
    console.log(num)
}

//Update display of average rating in the html
function updateAverageRateDisplay() {
    document.getElementById("averageRateDisplay").innerHTML = averageRate;
}

console.log("average rate", averageRate)