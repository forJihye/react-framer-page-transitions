const Photo = ({photo, index}) => {
  return <figure>  
    <img src={photo.thumbnailUrl} alt={photo.title} />
    <figcaption>{photo.title}</figcaption>
  </figure>
}

export default Photo;
