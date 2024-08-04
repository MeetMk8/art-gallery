import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import logo from "../images/main.jpg";

import img1 from "../images/ArtGallery/1.jpg";
import img2 from "../images/ArtGallery/2.jpg";
import img3 from "../images/ArtGallery/3.jpg";
import img4 from "../images/ArtGallery/4.jpg";
import img5 from "../images/ArtGallery/5.jpg";
import img6 from "../images/ArtGallery/6.jpg";

// Inline styles for animations and keyframes
const animationStyles = `
  @keyframes fadeInImage {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Home = () => {
  const galleryRef = useRef(null);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container-fluid mx-auto mt-20 px-2 md:px-20">
      <style>{animationStyles}</style>

      <section className="flex flex-col-reverse md:flex-row items-center mb-12">
        <div className="md:w-1/2 p-8">
          <TypeAnimation
            sequence={["Welcome To Your Art Gallery", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />

          <p className="text-base sm:text-lg mb-4">
            Explore a diverse collection of artwork from renowned and upcoming
            artists around the globe. Our gallery showcases a variety of styles
            and mediums, offering something for every art lover.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 hover:scale-105"
            onClick={scrollToGallery}
          >
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 hidden md:block animate-fade-in">
          <img
            src={logo}
            alt="Art Gallery"
            className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500"
            style={{
              animation: "fadeInImage 2s ease-out",
            }}
          />
        </div>
      </section>

      {/* Gallery Highlights */}
      <section ref={galleryRef} className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center animate-fade-in">
          Gallery Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[img1, img2, img3, img4, img5, img6].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full h-64 sm:h-48">
                <img
                  src={item}
                  alt={`Art ${index + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-300 opacity-80 hover:opacity-100"
                />
              </div>
              <div className="p-4 animate-fade-in">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Art Piece {index + 1}
                </h3>
                <p className="text-gray-600">
                  An amazing piece by an upcoming artist.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center animate-fade-in">
          What Our Visitors Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "John Doe", feedback: "A truly mesmerizing experience!" },
            { name: "Jane Smith", feedback: "The gallery is absolutely stunning." },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg animate-fade-in"
            >
              <p className="text-base sm:text-lg mb-4">
                "{testimonial.feedback}"
              </p>
              <p className="text-gray-700 font-semibold">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-50 p-8 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-3xl font-bold mb-4 text-center">Stay Updated</h2>
        <p className="text-base sm:text-lg mb-6 text-center">
          Subscribe to our newsletter to receive the latest news and updates.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
