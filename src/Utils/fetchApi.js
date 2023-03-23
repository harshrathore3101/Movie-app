import axios from "axios";

const BaseURL = "https://api.themoviedb.org/3/movie/";

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BaseURL}/${url}`);

  return data;
};
