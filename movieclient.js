const stars = document.querySelectorAll(".stars i");
const submitBtn = document.getElementById('submitBtn');


    //Loop through the "stars" NodeList
    stars.forEach((star, index1) => {
        //Add an event listener that runs a function when the "click" event is triggered
        star.addEventListener("click", (event) => {

            selectedStar = star.dataset.rating;
            
            console.log('Star clicked:', star.dataset.rating);

            //Loop through the "stars" NodeList Again
            stars.forEach((star, index2) => {
                //Add the "active" class to the clicked star and any stars with a lower index
                //and remove the "active" class from any stars with a higher index
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });

        });

        //Add event listener for double-click to reset stars
        star.addEventListener('dblclick', () => {
            stars.forEach((star) => {
                //Remove the "active" class from each star
                star.classList.remove("active");
            });
        });
    });



//Add event listener for the submit button
submitBtn.addEventListener('click', () => {

    //Get the movie Id element (numbered 1 to 18, based on which page user is on)
    const movieIdElement = document.querySelector('[data-movie-id]');

    if (movieIdElement) {

        //Initialize movieId to send to server, based on value of data-movie-id ex: "data-movie-id="movie1"
        const movieId = movieIdElement.dataset.movieId;

        //Send data to server (Post method)
        fetch('http://localhost:8080/update-rating', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            //Convert data to JSON String for the request body
            body: JSON.stringify({
                rating: selectedStar,
                movieId: movieId
            })
        })
        .then((response) => {
            if (response.ok) {
                console.log('Rating sent');
                return response.json();
            } else {
                console.log('Failed to update rating');
            }
        })
        .then(data => {
            //Log updated data 
            console.log('Rating updated successfully:', data.updatedData);

            //Store the updated rating data in localStorage
            localStorage.setItem(`movieRating-${movieId}`, JSON.stringify(data.updatedData));

            //Update UI with the rating data (User can see rating change in real time)
            movieIdElement.innerText = `Users Overall Rating : ${Math.round(data.updatedData.percentage * 100) / 100}%`;
        })
        .catch(error => {
            console.error('Error updating rating', error);
        });
    } else {
        console.error('Element with data-movie-id not found');
    }
});

//Initialize rating data when page loads
document.addEventListener('DOMContentLoaded', () => {

    //Get the movie Id element (numbered 1 to 18, based on which page user is on)
    const movieIdElement = document.querySelector('[data-movie-id]');
    if (movieIdElement) {
        //Initialize movieId
        const movieId = movieIdElement.dataset.movieId;

        //Retrieve rating data for the corresponding movie from localStorage
        const storedData = localStorage.getItem(`movieRating-${movieId}`);
        if (storedData) {
            const ratingData = JSON.parse(storedData);

            //Update UI with the rating data (Stores information for the user to see after reloading the page, thats why the line is duplicated)
            movieIdElement.innerText = `Users Overall Rating : ${Math.round(ratingData.percentage * 100) / 100}%`;
        }
    }

    //Hamburger menu
    var menuIcon = document.querySelector('.menu-icon');
    var menuOptions = document.querySelector('.menu-options');

    menuIcon.addEventListener('click', function() {
        menuOptions.classList.toggle('active');
    });

});





