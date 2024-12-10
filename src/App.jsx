import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=FfxAJlP_MyYMjTsxyxru6y7PlFDjwyNLRwOfOvk3pfw"
      )
      .then((res) => setImages(res.data));
  }, []);

  return (
    <div>
      Я тут
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
