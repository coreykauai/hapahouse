import React from "react";
import { useState } from "react";

export default function Foota() {
  const [isScrolledBottom, setIsScrolledBottom] = useState(false);
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setIsScrolledBottom(true);
    } else {
      setIsScrolledBottom(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`foota ${isScrolledBottom ? "footer-visible" : ""}`}>
      <a href="http://www.instagram.com/kauaidigitaldesigns">
        <p className="kdd">© KauaiDigitalDesigns</p>
      </a>
    </div>
  );
}
