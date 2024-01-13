import { IconButton } from "@material-ui/core";
import { SaveAlt } from "@material-ui/icons";
import Skeleton from "@material-ui/lab/Skeleton";
import FileSaver from "file-saver";
import React, { useState } from "react";
import "./ImgCard.css";

// ---------------------------------------------
// download the image in user's Device
function download(url, fileName) {
  FileSaver.saveAs(url, fileName);
}
// ---------------------------------------------

function ImgCard({ img, tags }) {
  // Get The first tag name of the image
  const alt = tags.split(",")[0];

  const [imageSatus, setImageSatus] = useState(false);

  return (
    <div className="imgCard">
      <div className="imgCard__inner">
        {/* className "d-none" hides the element  */}
        {/* If the image is not loaded then add className "d-none" to Image tag */}
        <img
          className={`imgCard__img ${!imageSatus && "d-none"}`}
          src={img}
          alt={alt}
          // if image is loaded then set ImageStatus true
          // It will hide the skeleton and photo will be visible
          onLoad={() => setImageSatus(true)}
        />
        {/* If the image is loaded then add className "d-none" to Image tag */}
        <Skeleton
          className={imageSatus && "d-none"}
          variant="rect"
          width="100%"
          height={250}
        />
        <IconButton
          className="imgCard__button"
          onClick={() => download(img, alt)}
        >
          <SaveAlt />
        </IconButton>
        {/* fadeBottom to show some shadow effect on bottom area og=f imgCard */}
        <div className="imgCard__fadeBottom"></div>
      </div>
    </div>
  );
}

export default ImgCard;
