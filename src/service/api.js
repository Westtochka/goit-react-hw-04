import axios from "axios";
export const fetchImages = async (query) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=FfxAJlP_MyYMjTsxyxru6y7PlFDjwyNLRwOfOvk3pfw&query=${query}`
  );
  return response.data;
};
// https://api.unsplash.com/photos/?client_id=FfxAJlP_MyYMjTsxyxru6y7PlFDjwyNLRwOfOvk3pfw&query=sun
// `https://api.unsplash.com/photos/?client_id=FfxAJlP_MyYMjTsxyxru6y7PlFDjwyNLRwOfOvk3pfw&query=${query}`
