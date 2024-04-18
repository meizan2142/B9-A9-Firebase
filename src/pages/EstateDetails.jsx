import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const cardEstate = useLoaderData()
    const [details, setDetails] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const detailsEstate = cardEstate.find(service => service.id == id) 
        setDetails(detailsEstate)
    }, [])
    console.log(details);

    return (
        <div className="grid items-center justify-center mt-12">
            <Helmet>
                <title>SOLAZ--EstateDetails</title>
            </Helmet>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={details.image} alt="Shoes" className="rounded-xl w-60 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"></h2>
                    <p>{details.estate_title}</p>
                    <p>{details.segment_name}</p>
                    <p>{details.description}</p>
                    <p>{details.price}</p>
                    <p>{details.status}</p>
                    <p>{details.area}</p>
                    <p>{details.location}</p>
                    <p>{details.facilities}</p>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;