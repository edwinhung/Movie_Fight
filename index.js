const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: OMDB_API,
      s: "avatar",
    },
  });
  console.log(response.data);
};

fetchData();
