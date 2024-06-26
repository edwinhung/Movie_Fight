const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: OMDB_API,
      s: searchTerm,
    },
  });
  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};

const input = document.body.querySelector("input");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  const target = document.body.querySelector("#target");
  for (let movie of movies) {
    const div = document.createElement("div");
    div.innerHTML = `
        <img src="${movie.Poster}" />
        <h1>${movie.Title}</h1>
    `;
    target.append(div);
  }
};
input.addEventListener("input", debounce(onInput, 500));
