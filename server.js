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
    movie1: { rating: 0, numRatings: 1, averageRate: 0 },
    movie2: { rating: 0, numRatings: 1, averageRate: 0 },
    movie3: { rating: 0, numRatings: 1, averageRate: 0 },
    movie4: { rating: 0, numRatings: 1, averageRate: 0 },
    movie5: { rating: 0, numRatings: 1, averageRate: 0 },
    movie6: { rating: 0, numRatings: 1, averageRate: 0 },
    movie7: { rating: 0, numRatings: 1, averageRate: 0 },
    movie8: { rating: 0, numRatings: 1, averageRate: 0 },
    movie9: { rating: 0, numRatings: 1, averageRate: 0 },
    movie10: { rating: 0, numRatings: 1, averageRate: 0 },
    movie11: { rating: 0, numRatings: 1, averageRate: 0 },
    movie12: { rating: 0, numRatings: 1, averageRate: 0 },
    movie13: { rating: 0, numRatings: 1, averageRate: 0 },
    movie14: { rating: 0, numRatings: 1, averageRate: 0 },
    movie15: { rating: 0, numRatings: 1, averageRate: 0 },
    movie16: { rating: 0, numRatings: 1, averageRate: 0 },
    movie17: { rating: 0, numRatings: 1, averageRate: 0 },
    movie18: { rating: 0, numRatings: 1, averageRate: 0 }
};

app.post('/update-rating', (req,res) => {

    //Get data from JSON Body
    const { movieId, rating } = req.body;

   
    console.log(movieId, ` Movie Id passed ${movieId}`);
    console.log(rating, ` rating passed ${rating}`);

    //Increment the rating and number of ratings
    movieRatings[movieId].rating += rating;
    movieRatings[movieId].numRatings++;

    //Calculate the average rating for the movie
    movieRatings[movieId].averagerate = movieRatings[movieId].rating / movieRatings[movieId].numRatings;


    console.log(movieRatings[movieId].averagerate, `average rating for ${movieId}`);
    console.log(movieRatings[movieId].rating, `total stars for ${movieId}`);
    console.log(movieRatings[movieId].numRatings, `number of ratings for ${movieId}`);

    //Send response back if successful
    res.status(200).json({ message: 'Rating updated successfully' });
})
  

