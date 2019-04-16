const getData = (data) => {
	const dataMovie = data.map(data => {
    return { Title: data.Title, Poster: data.Poster, imdbRating: data.imdbRating };
	});
	return dataMovie;
};

window.movie = {
  getData
};