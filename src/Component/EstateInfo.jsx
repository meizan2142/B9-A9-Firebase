import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const EstateInfo = ({ estate }) => {
    const { estate_title, image, description, price, status, area, location, facilities, id, segment_name } = estate;
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-xl w-60 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <p>{segment_name}</p>
                    <p>{price}</p>
                    <p>{status}</p>
                    <p>{area}</p>
                    <p>{location}</p>
                    <p>{facilities}</p>
                    <div className="card-actions">
                        <NavLink to={`/estatedetails/${id}`}>
                            <button className="btn btn-primary">View Property</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EstateInfo;