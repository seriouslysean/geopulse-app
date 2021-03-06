import React from 'react';

const PhotosPhoto = ({ photo }) => {
  let alt = '';
  const {
    id,
    caption,
    images: { standard_resolution: image },
    likes,
    link,
    user: { username },
  } = photo;
  if (caption) {
    alt = caption.text;
  }
  return (
    <li className="photos__photo">
      <a rel="external" href={link} title={alt}>
        <div className="photos__image" style={{ backgroundImage: `url(${image.url})` }}>
          <img src={image.url} width={image.width} height={image.height} alt={alt} />
        </div>
        <div className="photos__username">{username}</div>
      </a>
    </li>
  );
};

export default PhotosPhoto;
