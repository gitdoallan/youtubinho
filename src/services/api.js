import axios from 'axios';

const searchYouTubeAPI = (search) => {
  const options = {
    method: 'GET',
    url: `https://youtube-search9.p.rapidapi.com/snc/${search}`,
    headers: {
      'X-RapidAPI-Host': 'youtube-search9.p.rapidapi.com',
      'X-RapidAPI-Key': '16da98f81amsh9fab4507d4fcb89p17cdd8jsn51f053bcd5dd',
    },
  };

  const result = axios.request(options).then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });

  return result;
};

export default searchYouTubeAPI;
