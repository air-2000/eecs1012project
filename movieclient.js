const stars = document.querySelectorAll(".stars i");
const submitBtn = document.getElementById('submitBtn');


    // Loop through the "stars" NodeList
    stars.forEach((star, index1) => {
        // Add an event listener that runs a function when the "click" event is triggered
        star.addEventListener("click", (event) => {
            // Loop through the "stars" NodeList Again
            stars.forEach((star, index2) => {
                // Add the "active" class to the clicked star and any stars with a lower index
                // and remove the "active" class from any stars with a higher index
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
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


    submitBtn.addEventListener('click', () => {
        const selectedStar = document.querySelector('.fa-star.active');
        if (selectedStar) {
            const selectedRating = selectedStar.dataset.rating;
    
            console.log('Selected Rating:', selectedRating);
            // Send the rating to the server using fetch
            fetch('/rate-movie', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ rating: selectedRating }) // Send the selectedRating in the request body
            })
        } else {
            console.log('Please select a rating before submitting.');
        }
    });

