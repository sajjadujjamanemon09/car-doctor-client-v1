/* eslint-disable react/prop-types */
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id, title, img, price} = service;
    return (
<div className="card bg-base-100 border-2">
  <figure className="p-6">
    <img src={img} alt="Service" className="rounded-xl h-[208px] w-full" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-semibold pb-2">{title}</h2>
    <div className="text-red-500 font-medium text-xl flex justify-between">
        <p>Price: ${price}</p>
        <Link to={`/book/${_id}`}>
        <button className="text-red-500 font-extrabold text-2xl"><AiOutlineArrowRight/> </button>
        </Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;