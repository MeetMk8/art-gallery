import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation'; // Ensure you have this package installed
import { HiMenu, HiX } from 'react-icons/hi'; // Menu and Close icons from Heroicons

const Art = () => {
  const staticArtData = {
    categories: {
      Paintings: {
        items: [
          { id: 1, name: 'Sunset', price: 100, image_url: 'https://example.com/sunset.jpg' },
          { id: 2, name: 'Ocean', price: 150, image_url: 'https://example.com/ocean.jpg' },
          { id: 3, name: 'Mountain', price: 200, image_url: 'https://example.com/mountain.jpg' },
          { id: 4, name: 'Forest', price: 180, image_url: 'https://example.com/forest.jpg' },
          { id: 5, name: 'Desert', price: 160, image_url: 'https://example.com/desert.jpg' },
          { id: 6, name: 'Cityscape', price: 220, image_url: 'https://example.com/cityscape.jpg' },
          { id: 7, name: 'Lake', price: 140, image_url: 'https://example.com/lake.jpg' },
          { id: 8, name: 'Countryside', price: 170, image_url: 'https://example.com/countryside.jpg' },
          { id: 9, name: 'Abstract', price: 200, image_url: 'https://example.com/abstract.jpg' },
          { id: 10, name: 'Seascape', price: 130, image_url: 'https://example.com/seascape.jpg' },
          { id: 11, name: 'Sunrise', price: 190, image_url: 'https://example.com/sunrise.jpg' },
          { id: 12, name: 'Night Sky', price: 210, image_url: 'https://example.com/night_sky.jpg' },
          { id: 13, name: 'Rainforest', price: 180, image_url: 'https://example.com/rainforest.jpg' },
          { id: 14, name: 'Desert Sunset', price: 140, image_url: 'https://example.com/desert_sunset.jpg' },
          { id: 15, name: 'Misty Mountains', price: 220, image_url: 'https://example.com/misty_mountains.jpg' },
        ],
      },
      Sculptures: {
        items: [
          { id: 16, name: 'The Thinker', price: 200, image_url: 'https://example.com/thinker.jpg' },
          { id: 17, name: 'David', price: 250, image_url: 'https://example.com/david.jpg' },
          { id: 18, name: 'Venus de Milo', price: 300, image_url: 'https://example.com/venus.jpg' },
          { id: 19, name: 'Pieta', price: 350, image_url: 'https://example.com/pieta.jpg' },
          { id: 20, name: 'Nike of Samothrace', price: 280, image_url: 'https://example.com/nike.jpg' },
          { id: 21, name: 'Apollo Belvedere', price: 270, image_url: 'https://example.com/apollo.jpg' },
          { id: 22, name: 'Discobolus', price: 260, image_url: 'https://example.com/discobolus.jpg' },
          { id: 23, name: 'Hermes of Praxiteles', price: 300, image_url: 'https://example.com/hermes.jpg' },
          { id: 24, name: 'Laocoön and His Sons', price: 320, image_url: 'https://example.com/laocoon.jpg' },
        ],
      },
      Drawings: {
        items: [
          { id: 25, name: 'Portrait', price: 120, image_url: 'https://example.com/portrait.jpg' },
          { id: 26, name: 'Sketch', price: 90, image_url: 'https://example.com/sketch.jpg' },
          { id: 27, name: 'Still Life', price: 130, image_url: 'https://example.com/still_life.jpg' },
          { id: 28, name: 'Landscape', price: 110, image_url: 'https://example.com/landscape.jpg' },
          { id: 29, name: 'Abstract', price: 150, image_url: 'https://example.com/abstract_drawing.jpg' },
          { id: 30, name: 'Cityscape Drawing', price: 140, image_url: 'https://example.com/cityscape_drawing.jpg' },
          { id: 31, name: 'Nature Study', price: 110, image_url: 'https://example.com/nature_study.jpg' },
          { id: 32, name: 'Figurative Art', price: 160, image_url: 'https://example.com/figurative_art.jpg' },
          { id: 33, name: 'Architectural Sketch', price: 170, image_url: 'https://example.com/architectural_sketch.jpg' },
        ],
      },
      DigitalArt: {
        items: [
          { id: 34, name: 'Abstract', price: 300, image_url: 'https://example.com/abstract.jpg' },
          { id: 35, name: 'Cyberpunk', price: 350, image_url: 'https://example.com/cyberpunk.jpg' },
          { id: 36, name: 'Surrealism', price: 400, image_url: 'https://example.com/surrealism.jpg' },
          { id: 37, name: 'Futuristic', price: 320, image_url: 'https://example.com/futuristic.jpg' },
          { id: 38, name: 'Pop Art', price: 280, image_url: 'https://example.com/pop_art.jpg' },
          { id: 39, name: '3D Art', price: 350, image_url: 'https://example.com/3d_art.jpg' },
          { id: 40, name: 'Virtual Reality Art', price: 400, image_url: 'https://example.com/vr_art.jpg' },
          { id: 41, name: 'Generative Art', price: 320, image_url: 'https://example.com/generative_art.jpg' },
          { id: 42, name: 'Digital Collage', price: 340, image_url: 'https://example.com/digital_collage.jpg' },
        ],
      },
      Photography: {
        items: [
          { id: 43, name: 'Cityscape', price: 160, image_url: 'https://example.com/cityscape.jpg' },
          { id: 44, name: 'Nature', price: 140, image_url: 'https://example.com/nature.jpg' },
          { id: 45, name: 'Portrait', price: 180, image_url: 'https://example.com/portrait_photo.jpg' },
          { id: 46, name: 'Street', price: 130, image_url: 'https://example.com/street.jpg' },
          { id: 47, name: 'Wildlife', price: 200, image_url: 'https://example.com/wildlife.jpg' },
          { id: 48, name: 'Abstract Photography', price: 190, image_url: 'https://example.com/abstract_photo.jpg' },
          { id: 49, name: 'Black and White', price: 170, image_url: 'https://example.com/bw_photo.jpg' },
          { id: 50, name: 'Documentary', price: 210, image_url: 'https://example.com/documentary.jpg' },
        ],
      },
      MixedMedia: {
        items: [
          { id: 51, name: 'Collage', price: 220, image_url: 'https://example.com/collage.jpg' },
          { id: 52, name: 'Assemblage', price: 270, image_url: 'https://example.com/assemblage.jpg' },
          { id: 53, name: 'Digital Collage', price: 250, image_url: 'https://example.com/digital_collage.jpg' },
          { id: 54, name: 'Textile Art', price: 240, image_url: 'https://example.com/textile_art.jpg' },
          { id: 55, name: 'Found Objects', price: 300, image_url: 'https://example.com/found_objects.jpg' },
          { id: 56, name: 'Paper Art', price: 230, image_url: 'https://example.com/paper_art.jpg' },
          { id: 57, name: 'Installation Art', price: 270, image_url: 'https://example.com/installation_art.jpg' },
          { id: 58, name: 'Sculptural Collage', price: 280, image_url: 'https://example.com/sculptural_collage.jpg' },
          { id: 59, name: 'Mixed Media Painting', price: 290, image_url: 'https://example.com/mixed_media_painting.jpg' },
          { id: 60, name: 'Conceptual Art', price: 310, image_url: 'https://example.com/conceptual_art.jpg' },
        ],
      },
      Illustration: {
        items: [
          { id: 61, name: 'Fantasy Art', price: 150, image_url: 'https://example.com/fantasy_art.jpg' },
          { id: 62, name: 'Children\'s Book', price: 120, image_url: 'https://example.com/childrens_book.jpg' },
          { id: 63, name: 'Character Design', price: 180, image_url: 'https://example.com/character_design.jpg' },
          { id: 64, name: 'Concept Art', price: 190, image_url: 'https://example.com/concept_art.jpg' },
          { id: 65, name: 'Storyboarding', price: 170, image_url: 'https://example.com/storyboarding.jpg' },
          { id: 66, name: 'Editorial Illustration', price: 160, image_url: 'https://example.com/editorial_illustration.jpg' },
          { id: 67, name: 'Fashion Illustration', price: 200, image_url: 'https://example.com/fashion_illustration.jpg' },
          { id: 68, name: 'Technical Illustration', price: 220, image_url: 'https://example.com/technical_illustration.jpg' },
          { id: 69, name: 'Medical Illustration', price: 240, image_url: 'https://example.com/medical_illustration.jpg' },
          { id: 70, name: 'Tattoo Design', price: 210, image_url: 'https://example.com/tattoo_design.jpg' },
        ],
      },
    },
  };


  const [artData, setArtData] = useState({});
  const [filteredArt, setFilteredArt] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setArtData(staticArtData.categories);

    const categoryList = Object.keys(staticArtData.categories);
    setCategories(categoryList);

    const allArtPieces = categoryList.flatMap((category) => staticArtData.categories[category].items);
    setFilteredArt(allArtPieces);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setLoading(true);

    setTimeout(() => {
      if (category === 'All') {
        const allArtPieces = categories.flatMap((cat) => artData[cat].items);
        setFilteredArt(allArtPieces);
      } else {
        setFilteredArt(artData[category]?.items || []);
      }
      setLoading(false);
    }, 500); // Adjusted loader duration
  };

  return (
    <div className="relative bg-gray-100 min-h-screen flex flex-col lg:flex-row mt-20">
      {/* Mobile Navigation Menu */}
      <div className="lg:hidden">
        <button
          className="text-3xl text-blue-500 p-4 sticky"
          onClick={() => setMenuOpen(true)}
        >
          <HiMenu />
        </button>
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-50 shadow-lg overflow-y-auto p-10">
            <button
              className="text-3xl text-blue-500 absolute top-4 right-4 p-4"
              onClick={() => setMenuOpen(false)}
            >
              <HiX />
            </button>
            <div className="flex flex-col items-center mt-16 space-y-4">
              <button
                onClick={() => handleCategoryClick('All')}
                className={`w-full px-5 py-3 rounded-lg font-medium ${
                  selectedCategory === 'All'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                    : 'bg-gray-200 text-gray-700'
                } transition-colors duration-300`}
                onClick={() => setMenuOpen(false)}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full px-5 py-3 rounded-lg font-medium ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                      : 'bg-gray-200 text-gray-700'
                  } transition-colors duration-300`}
                  onClick={() => setMenuOpen(false)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop and Tablet Layout */}
      <aside className="hidden lg:flex flex-col w-64 sticky top-0 bg-white shadow-lg h-screen overflow-y-auto p-4">
        {/* <h2 className="text-3xl font-bold mb-4 text-center">Art Categories</h2> */}
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryClick('All')}
            className={`w-full px-4 py-2 rounded-lg font-medium text-left ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                : 'bg-gray-200 text-gray-700'
            } transition-colors duration-300`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`w-full px-4 py-2 rounded-lg font-medium text-left ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                  : 'bg-gray-200 text-gray-700'
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </aside>

      {/* Art Pieces Grid */}
      <main className="flex-1 p-6">
        {/* Loader */}
        {loading && (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 z-50">
            <div className="text-center mb-4">
              <TypeAnimation
                sequence={["Loading Art...", 1000]}
                wrapper="span"
                speed={65}
                style={{ fontSize: "1.5em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        )}

        {/* Art Pieces Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredArt.length === 0 && !loading && (
            <div className="col-span-full text-center text-gray-600">
              No art pieces found.
            </div>
          )}
          {filteredArt.map((piece) => (
            <div
              key={piece.id}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={piece.image_url}
                alt={piece.name}
                className="w-full h-64 object-cover"
                onError={(e) =>
                  (e.target.src =
                    'https://via.placeholder.com/150?text=Image+Not+Found')
                } // Placeholder for broken images
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{piece.name}</h3>
                <p className="text-gray-600 mb-2">${piece.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Scrollbar Styling */}
      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-hidden::-webkit-scrollbar-thumb {
          background-color: #3b82f6; /* Blue color */
          border-radius: 9999px;
        }
        .scrollbar-hidden::-webkit-scrollbar-track {
          background-color: #e5e7eb; /* Gray color */
        }
      `}</style>
    </div>
  );
};

export default Art;
