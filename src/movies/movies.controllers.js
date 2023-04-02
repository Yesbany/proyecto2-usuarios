const movieDb = [
    {
        id :1,
        title: "Pacific Rim",
        description: "Lorem Ipsum",
        year: 2012,
        director: "Guillermo del Toro"
    }
]

let movieId = 2

const findAllMovies = async () => {
    return movieDb
}

const findMovieById = async (id) => {
    const data = movieDb.find(movie => movie.id === id)
    return data
}

const createMovie = async (movieObj) => {
    const newMovie = {
        id: movieId++,
        title: movieObj.title || 'Lorem',
        description: movieObj.description || 'Lorem Ipsum',
        year: movieObj.year || 2000,
        director: movieObj.director || "Anonymous"
    }
    movieDb.push(newMovie)
    return newMovie
}

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie
}