export const TeaCard = () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img className="card-image" src="src/assets/images/AppleGreen.png" />
        <img className="card-image" src="src/assets/images/SaltedCaramelBlack.png" />
        <h3 className="card-title">Title</h3>
        <div className="card-inform">
          <h4 className="tea-price">Price</h4>
          <h4 className="tea-type">Type</h4>
          <h4 className="tea-weight">Weight</h4>
        </div>
      </div>
    </div>
  );
};
