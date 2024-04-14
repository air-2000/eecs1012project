const stars = document.querySelectorAll(".stars i");
const submitBtn = document.getElementById('submitBtn');
var selectedStar;
var movieId;

//Define data object to send to server
let data;


    // Loop through the "stars" NodeList
    stars.forEach((star, index1) => {
        // Add an event listener that runs a function when the "click" event is triggered
        star.addEventListener("click", (event) => {

            console.log('Star clicked:', star.dataset.rating);

            // Loop through the "stars" NodeList Again
            stars.forEach((star, index2) => {
                // Add the "active" class to the clicked star and any stars with a lower index
                // and remove the "active" class from any stars with a higher index
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });

            //Event listener for the submit button
            submitBtn.addEventListener('click', () => {

                //Get rating number
                rating = star.dataset.rating

                //Get movie Id (numbered 1 to 18)
                movieId = document.getElementById('ratingDisplay').dataset.movieId;
                
                //Input object with data to send to the server
                data = {
                    rating: rating,
                    movieId: movieId
                };
            
                console.log(movieId);
                console.log(rating);
                
                //Send data to server
                fetch('http://localhost:8080/update-rating', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    //Turn into JSON String for the request body
                    body: JSON.stringify(data)
                })     
                .then((response => {
                    if(response.ok) {
                        console.log('Rating sent');
                    }
                    else{
                        console.log('Failed to send rating');
                    }
                }))
                .catch(error => {
                    console.error('error sending rating', error);
                })

            
            });
        });

        // Add event listener for double-click to reset stars
        star.addEventListener('dblclick', () => {
            stars.forEach((star) => {
                // Remove the "active" class from each star
                star.classList.remove("active");
            });
        });
    });
