import React from 'react';
import { FaUsers, FaHeart, FaBullhorn } from 'react-icons/fa';
import bgimg from "../images/AboutUs/main.jpg";

// Inline styles for animations and background
const styles = {
  fadeIn: {
    animation: 'fadeIn 1s ease-out'
  },
  slideIn: {
    animation: 'slideIn 1s ease-out'
  },
  container: {
    padding: '40px 0',
    minHeight: '100vh',
    color: 'white',
    position: 'relative',
  },
  sectionOverlay: {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    padding: '40px',
    borderRadius: '8px',
    position: 'relative',
    zIndex: 1,
    maxWidth: '800px',
    margin: '0 auto'
  },
  gradientOverlay: {
    backgroundImage: `linear-gradient(to right, transparent, rgba(211, 211, 211, 0.5), transparent)`,
    position: 'absolute',
    inset: '0',
    pointerEvents: 'none',
    zIndex: 0
  },
  textContainer: {
    position: 'relative',
    zIndex: 1
  }
};

// Keyframe animations
const animationStyles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-10" style={styles.container}>
      <style>{animationStyles}</style> {/* Injecting keyframes directly into the document */}

      {/* Hero Section */}
      <section className="relative mb-12 mt-10" style={styles.sectionOverlay}>
        <div className="text-center" style={styles.textContainer}>
          <h1 className="text-4xl font-bold mb-4" style={styles.slideIn}>About Us</h1>
          <p className="text-lg mb-4" style={styles.fadeIn}>
            Welcome to the Art Gallery, where creativity and passion come together to celebrate the beauty of art.
          </p>
          <p className="text-lg" style={styles.fadeIn}>
            Our mission is to connect art enthusiasts with remarkable pieces from talented artists worldwide.
          </p>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-black" style={styles.slideIn}>Our Mission & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center hover:shadow-2xl transition-shadow" style={styles.fadeIn}>
            <FaHeart className="text-blue-500 text-4xl mr-4 transform transition-transform hover:scale-110" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Mission</h3>
              <p className="text-gray-600">
                Our mission is to inspire and educate through the power of art, creating a platform for emerging and established artists alike.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center hover:shadow-2xl transition-shadow" style={styles.fadeIn}>
            <FaBullhorn className="text-blue-500 text-4xl mr-4 transform transition-transform hover:scale-110" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Values</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Creativity</li>
                <li>Innovation</li>
                <li>Inclusivity</li>
                <li>Community Engagement</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center hover:shadow-2xl transition-shadow" style={styles.fadeIn}>
            <FaUsers className="text-blue-500 text-4xl mr-4 transform transition-transform hover:scale-110" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Goals</h3>
              <p className="text-gray-600">
                Our goal is to build a vibrant community where art and creativity thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-black" style={styles.slideIn}>Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((member) => (
            <div key={member} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow" style={styles.fadeIn}>
              <img
                src={`https://source.unsplash.com/random/400x400?person-${member}`}
                alt={`Team Member ${member}`}
                className="w-full h-48 object-cover transform transition-transform hover:scale-105"
              />
              <div className="p-4 text-center text-black">
                <h3 className="text-lg font-bold mb-2">Member {member}</h3>
                <p className="text-gray-600">Position</p>
                <p className="text-gray-600 mt-2">A brief bio of the team member, highlighting their role and contributions.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery History */}
      <section className="relative bg-blue-50 p-8 rounded-lg shadow-lg mb-12 overflow-hidden" style={styles.fadeIn}>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Our History</h2>
          <p className="text-lg text-center text-gray-700">
            Since our inception, the Art Gallery has been dedicated to fostering a love for art and supporting the creative community.
          </p>
        </div>
        <div className="absolute inset-0" style={styles.gradientOverlay}></div>
      </section>

    </div>
  );
};

export default AboutUs;
