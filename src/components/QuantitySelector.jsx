
import PropTypes from 'prop-types';

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button className='btn' onClick={handleDecrement}>-</button>
      <span className='bold digit'>{quantity}</span>
      <button className='btn'  onClick={handleIncrement}>+</button>
    </div>
  );
};

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default QuantitySelector;
