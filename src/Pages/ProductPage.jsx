import { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { Fade } from "react-awesome-reveal";
import { FaFacebookSquare } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import "./productPage.css";

export default function ProductPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "/Pics/IMG_1131.jpg",
    "/Pics/IMG_1141.jpg",
    "/Pics/IMG_1147.jpg",
    "/Pics/IMG_1149.jpg",
    "/Pics/IMG_1335.jpg",
    "/Pics/IMG_1346.jpg",
    "/Pics/IMG_1368.jpg",
    "/Pics/IMG_1352-Edit.jpeg",
    "/Pics/IMG_1374-Edit.jpg",
    "/Pics/IMG_1396-Edit.jpg",
    "/Pics/IMG_1443-Edit.jpg",
    "/Pics/IMG_1402-Edit.jpg",
    "/Pics/IMG_1417.jpg",
    "/Pics/IMG_1943.JPG",
    "/Pics/IMG_4189.jpg",
    "/Pics/IMG_4191.jpg",
    "/Pics/IMG_4192.jpg",
    "/Pics/IMG_4193.jpg",
    "/Pics/IMG_4194.jpg",
    "/Pics/IMG_4197.jpg",
    "/Pics/IMG_4198.jpg",
    "/Pics/IMG_4200.jpg",
    "/Pics/IMG_4201.jpg",
    "/Pics/IMG_4202.jpg",
    "/Pics/IMG_4203.jpg",
    "/Pics/IMG_4205.jpg",
    "/Pics/IMG_4206.jpg",
    "/Pics/IMG_4207.jpg",
    "/Pics/IMG_4208.jpg",
    "/Pics/IMG_4209.jpg",
    "/Pics/IMG_4210.jpg",
    "/Pics/IMG_4211.jpg",
    "/Pics/IMG_4212.jpg",
    "/Pics/IMG_4213.jpg",
    "/Pics/IMG_4215.jpg",
    "/Pics/IMG_4217.jpg",
    "/Pics/IMG_4220.jpg",
    "/Pics/IMG_4196.jpg",
    "/Pics/IMG_4195.jpg",
    "/Pics/Screenshot 2024-04-25 at 6.38.42 PM.png",
    "/Pics/bag2.png",
    "/Pics/hats2.png",
    "/Pics/hatone.jpeg",
    "/Pics/hat5.png",
    "/Pics/hat6.png",
    "/Pics/hat4.png",
    "/Pics/hapalogohat.png",
    "/Pics/hapahat.png",
    "/Pics/fishhats.png",
    "/Pics/buttons.png",
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="product-container">
      <Fade cascade damping={0.2}>
        <div className="spacer"></div>
        <h1 className="products-title">
          What we got this <span className="products-title-time"> MONTH!</span>
        </h1>
      </Fade>
      <Fade fraction={0}>
        <div className="products">
          {images.map((src, index) => (
            <img
              className={"product-pics"}
              src={src}
              onClick={() => openImageViewer(index)}
              width="300"
              key={index}
              style={{ margin: "2px" }}
              alt=""
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              onClose={closeImageViewer}
              disableScroll={true}
              backgroundStyle={{
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
              closeOnClickOutside={true}
            />
          )}
        </div>
        <div className="link-container-products">
          <a href="http://www.instagram.com/hapahouse/" target="_blank">
            <LuInstagram className="links-products" />
          </a>

          <a href="http://www.facebook.com/hapahouse/" target="_blank">
            <FaFacebookSquare className="links-products" />
          </a>
        </div>
        <div className="spacer"></div>
        <div className="desktop-footer">
          <a href="http://www.instagram.com/kauaidigitaldesigns">
            <p className="kdd">© KauaiDigitalDesigns</p>
          </a>
        </div>
      </Fade>
    </div>
  );
}
