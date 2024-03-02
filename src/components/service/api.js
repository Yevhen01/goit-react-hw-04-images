import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "42034785-c436f003c310c5b5229f24b7b";
const PER_PAGE = 12;

async function fetchApiData(query, page) {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );
  return response.data;
}

export default fetchApiData;
