import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./service/api";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("bird");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchImages(query);
        setImages(response);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query]);
  const handleQuery = (query) => {
    setQuery(query);
  };
  return (
    <div>
      <SearchBar onChangeQuery={handleQuery} />
      {isLoading && <Loader />}
      {isError && <h2>Щось сталось, онови сторінку!</h2>}
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
