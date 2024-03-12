import { useState } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import QuantitySelector from './QuantitySelector';
import ProductModel from './ProductModel';
import '../css/main.css';

const ProductDetails = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [starRating, setStarRating] = useState(0);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (newQuantity) => {
    setSelectedQuantity(newQuantity);
  };

  const handleRatingChange = (newRating) => {
    setStarRating(newRating);
  };

  const addToCart = () => {
    // Implement addToCart functionality here
  };

  const addToWishlist = () => {
    // Implement addToWishlist functionality here
  };

  return (
    <div className="product-details">
      <div className="image-column">
        <ProductModel selectedColor={selectedColor} />
      </div>
      <div className="content-column">
        <h2>{product.title}</h2>
        <StarRating rating={starRating} onRatingChange={handleRatingChange} />
        <div className="color-selector">
          {product.colors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
              className={selectedColor === color ? 'selected' : ''}
            ></button>
          ))}
        </div>
        <div className="size-selector">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => handleSizeChange(size)}
              className={selectedSize === size ? 'selected btn' : ''}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <div className='item-desc'>
          <h4>About this item</h4>
          <ul>
            <li>VALUE PACK - Available in a handy pack of two for one-and-done shopping.</li>
            <li>HOLDS ITS SHAPE - The ribbed crewneck lays flat and holds its shape.</li>
            <li>ROOM TO MOVE - A full cut in these men’s undershirts gives you extra room to move.</li>
            <li>COTTON GOODNESS - Soft and strong 6-oz. ring-spun cotton feels great for comfort that lasts.</li>
            <li>COLD WATER WASH - Machine wash cold with like colors. Use only nonchlorine bleach when needed. Tumble dry low. Cool iron if needed.</li>
          </ul>
        </div>
        <QuantitySelector quantity={selectedQuantity} onQuantityChange={handleQuantityChange} />
        <div className="buttons">
          <button className='btn' onClick={addToCart}>Add to Cart</button>
          <button className='btn' onClick={addToWishlist}>Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetails;
