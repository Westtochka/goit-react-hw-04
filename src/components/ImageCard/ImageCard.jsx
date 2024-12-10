import s from "./ImageCard.module.css";
const ImageCard = ({ image }) => {
  return (
    <div>
      <li className={s.gallery} key={image.id}>
        <img className={s.img} src={image.urls.small} alt={image.description} />
      </li>
    </div>
  );
};

export default ImageCard;
