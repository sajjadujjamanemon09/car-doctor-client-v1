
import img from '../../assets/images/checkout/checkout.png';

const CheckOutCard = () => {
  const backgroundStyle = {
    backgroundImage: `url(${img})`, // Correct usage of backgroundImage
  };

  return (
    <div className="hero h-[30vh]" style={backgroundStyle}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        </div>
      </div>
    </div>
  );
};

export default CheckOutCard;
