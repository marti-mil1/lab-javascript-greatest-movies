// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArray = [];
    moviesArray.forEach(function (movie) {
        if (!directorsArray.includes(movie.director)) {
            directorsArray.push(movie.director);
        }
    });
    return directorsArray;
}

console.log(getAllDirectors(movies));




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const movieCounter = moviesArray.filter(
      (movie) =>
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
    return movieCounter.length;
  }
  
  console.log(howManyMovies(movies));
  



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
    // const scoredMovies = moviesArray.filter((movie) => movie.score !== '' || movie.score === 0);
    const sumScore = moviesArray.reduce(
      (accumulator, currentValue) => accumulator + (currentValue.score || 0),
      0
    );
    const avgScore = sumScore / moviesArray.length;
    return parseFloat(avgScore.toFixed(2));
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray)  {
    const dramaMovies = moviesArray.filter((movie) =>
        movie.genre.includes("Drama")
      );
    if (dramaMovies.length === 0) {
        return 0;
      } else {
        const sumScoreDramaMovies = dramaMovies.reduce(
          (accumulator, currentValue) => accumulator + currentValue.score,
          0
        );
        const avgScoreDramaMovies = sumScoreDramaMovies / dramaMovies.length;
        return parseFloat(avgScoreDramaMovies.toFixed(2));
      }
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArr = moviesArray.slice();
    const moviesSortedByYear = newArr.sort((a, b) => {
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1;
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  
    return moviesSortedByYear;
  }
  
  console.log(
    orderByYear([
      { title: "abc", year: 2002 },
      { title: "bac", year: 1982 },
      { title: "aab", year: 1982 },
    ])
  );
  



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArr = moviesArray.slice();
  
    const allTitles = newArr.map((movie) => movie.title);
    if (allTitles.length > 20) {
      return allTitles.sort().slice(0, 20);
    } else {
      return allTitles.sort();
    }
  }
  
  console.log(orderAlphabetically(movies));




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArr = [...moviesArray];
  
    return newArr.map((movie) => {
      const [hours, minutes] = movie.duration.split(' ')
      const hourseParsed = parseInt(hours?.replace('h', '') || 0) * 60
      const minutesParsed = parseInt(minutes?.replace('min', '') || 0)
  
      return {
          ...movie,
          duration: hourseParsed + minutesParsed,
      };
    });
  }
  
  console.log(typeof turnHoursToMinutes(movies));





// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
      return null;
    }
    // Dictionary
    /*
    {
      1972: {
          count: 12,
          score: 120
      },
      1974: {
          count: 6,
          score: 43.2
      }
    }
      */
  
    const years = {}
    moviesArray.forEach((movie) => {
      if (years[movie.year]) {
          years[movie.year].count += 1
          years[movie.year].score += movie.score
      } else {
          years[movie.year] = { count: 1, score: movie.score }
      }
    });
    
    let maxYear = -1
    let maxAvg = -1
    
    Object.keys(years).forEach(year => {
      const { score, count } = years[year]
      const avg = score / count
  
      if (maxAvg < avg) {
          maxAvg = avg
          maxYear = year
      }
    })
    
    return `The best year was ${maxYear} with an average score of ${maxAvg}`
  }
