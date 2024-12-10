import axios from "axios";
export const fetchImages = async () => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=FfxAJlP_MyYMjTsxyxru6y7PlFDjwyNLRwOfOvk3pfw`
  );
  return response.data;
};
