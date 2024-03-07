import { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/ImageSlider.css'; // Ensure that ImageSlider.css is correctly imported
const ImageSlider = ({ images, colors, selectedColor }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // Find the index of the selected color in the colors array
    const selectedColorIndex = colors.indexOf(selectedColor);
  
    // Use the selected color index to determine the current image index
    if (selectedColorIndex !== -1 && selectedColorIndex !== currentImageIndex) {
      setCurrentImageIndex(selectedColorIndex);
      console.log('Updating currentImageIndex:', selectedColorIndex);
    }
  
    return (
      <div className="image-slider">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index}`} style={{ display: index === currentImageIndex ? 'block' : 'none' }} />
        ))}
      </div>
    );
  };
  
  ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedColor: PropTypes.string.isRequired,
  };
  
  export default ImageSlider;