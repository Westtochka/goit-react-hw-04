const ImageCard = ({ image }) => {
  return (
    <div>
      <li key={image.id}>
        <img src={image.urls.small} alt={image.description} />
      </li>
    </div>
  );
};

export default ImageCard;
