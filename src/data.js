const getSearchData = (data) => {
	const dataMovie = data.map(data => {
    return { Title: data.Title, Poster: data.Poster, Year: data.Year };
	});
	return dataMovie;
};

const getId = (data) => {
 const dataMovie = data.map(data => data.imdbID);
 return dataMovie;
};

window.movie = {
  getSearchData,
  getId
};
