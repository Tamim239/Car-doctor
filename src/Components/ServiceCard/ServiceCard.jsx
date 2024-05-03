import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const ServiceCard = ({service}) => {
    const { _id,img, price, title} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="text-xl text-orange-500">Price : {price}</p>
    <div className="card-actions  justify-end">
      <Link to={`/bookService/${_id}`}>
      <button className="btn btn-error text-3xl"><IoIosArrowRoundForward /></button>
      </Link>
    </div>
  </div>
</div>
  )
}
