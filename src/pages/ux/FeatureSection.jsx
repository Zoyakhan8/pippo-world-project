import '../ui/FeatureSection.css'
export const FeatureSection = ({ title, text, image, reverse = false }) => {
  return (
    <div className='feature-section'>
      <div className={`feature-container ${reverse ? "reverse" : ""}`}>
        <div className="feature-image">
          <img src={image} alt={title} />
        </div>
        <div className="feature-text">
          <div className='feature-content'>
          <h1>{title}</h1>
          <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
