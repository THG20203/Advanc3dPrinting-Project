import React from "react";
import FirstGallery from "../../../components/Gallery/firstGallery";
import SecondGallery from "../../../components/Gallery/secondGallery";

const GalleryPage = () => {
  return (
    <div className="container">
      <FirstGallery />
      <SecondGallery />
    </div>
  );
};

export default GalleryPage;
