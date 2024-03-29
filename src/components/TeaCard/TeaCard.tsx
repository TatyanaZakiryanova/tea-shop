export const TeaCard = () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img className="card-image" />
        <h3 className="card-title">Name</h3>
        <div className="card-inform">
          <h4 className="tea-price">Price</h4>
          <h4 className="tea-taste">Taste</h4>
        </div>
      </div>
    </div>
  );
};
