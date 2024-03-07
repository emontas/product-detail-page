
import PropTypes from 'prop-types';
import '../css/StarRating.css';

const StarRating = ({ rating, onRatingChange }) => {
  const handleStarClick = (newRating) => {
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={index <= rating ? 'star-filled' : 'star-empty'}
          onClick={() => handleStarClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default StarRating;
