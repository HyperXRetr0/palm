import React, { useState, useEffect } from "react";
import "./Guide.css";
import { SignImageData } from "../../data/SignImageData";
import { useSelector } from "react-redux";
import all_images from "../../assests/all_images.png";
// import Footer from "../footer/Footer";

const Guide = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * SignImageData.length);
      const randomImage = SignImageData[randomIndex];
      setCurrentImage(randomImage);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="signlang_detection-container">
      {accessToken ? (
        <div className="signlang_imagelist-container">
          <div className="signlang_image-div">
            {currentImage ? (
              <img src={all_images} alt="all signs" className="all_image" />
            ) : (
              <h3 className="gradient__text">
                Please wait while we are generating the images for you...
              </h3>
            )}
          </div>
        </div>
      ) : (
        <div className="signlang_detection_notLoggedIn">
          <h1 className="gradient__text">Please Login !</h1>
          <p>
            We Save Your Detection Data to show your progress and learning in
            dashboard, So please Login to Test this Detection Feature.
          </p>
        </div>
      )}
      {/* {accessToken && <Footer />} */}
    </div>
  );
};

export default Guide;
