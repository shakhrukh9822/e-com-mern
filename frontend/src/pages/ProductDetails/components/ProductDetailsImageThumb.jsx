import React from "react";
import ImageGallery from "react-image-gallery";

const ProductDetailsImageThumb = ({ images }) => {
  return (
    <ImageGallery
      items={images}
      thumbnailPosition="bottom"
      showNav={false}
      showPlayButton={false}
    />
  );
};

export default ProductDetailsImageThumb;
