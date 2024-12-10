import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul className={s.imageGallery}>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
