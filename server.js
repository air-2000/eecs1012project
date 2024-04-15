const express = require('express'); //we must have express installed!
const app = express();
var port = 8080; //the port we will be running our server on

//Middleware for parsing JSON bodies
app.use(express.json());

//Check if server is running
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//Store ratings and number of ratings in key value pairs
var movieRatings = {
    movie1: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie2: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie3: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie4: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie5: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie6: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie7: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie8: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie9: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie10: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie11: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie12: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie13: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie14: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie15: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie16: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie17: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 },
    movie18: { rating: 0, numRatings: 0, averageRate: 0, percentage: 0 }
};

app.post('/update-rating', (req,res) => {

    //Get data from JSON Body
    const { movieId, rating } = req.body;

   
    console.log(movieId, ` Movie Id passed ${movieId}`);
    console.log(rating, ` rating passed ${rating}`);

  

    //Increment the rating and number of ratings
    movieRatings[movieId].rating += parseInt(rating, 10);
    movieRatings[movieId].numRatings += 1;

    //Calculate the average rating for the movie
    movieRatings[movieId].averageRate = movieRatings[movieId].rating / (5 * movieRatings[movieId].numRatings);

    // Calculate the percentage
    movieRatings[movieId].percentage = movieRatings[movieId].averageRate * 100;

    console.log(movieRatings[movieId].averageRate, `average rating for ${movieId}`);
    console.log(movieRatings[movieId].rating, `total stars for ${movieId}`);
    console.log(movieRatings[movieId].numRatings, `number of ratings for ${movieId}`);
    console.log(movieRatings[movieId].percentage, `percentage for ${movieId}`);

    //Create updatedData with the updated information
    const updatedData = {
        rating: movieRatings[movieId].rating,
        numRatings: movieRatings[movieId].numRatings,
        averageRate: movieRatings[movieId].averageRate,
        percentage: movieRatings[movieId].percentage
    };

    //Send response back if successful
    res.status(200).json({ message: 'Rating updated successfully', updatedData});
})
  