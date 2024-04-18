import { Helmet } from "react-helmet-async";
import ShopCard from "../Component/ShopCard";
import { useEffect, useState } from "react";

const Shop = () => {
    const [shopCardDetails, setShopCardDetails] = useState([])
    useEffect(() => {
        fetch('/shop.json')
            .then((res) => res.json())
            .then((data) => {
                setShopCardDetails(data)
            })
    }, [])
    console.log(shopCardDetails);
    return (
        <div className="text-center">
            <Helmet>
                <title>SOLAZ--Shop</title>
            </Helmet>
            <p className="font-bold text-2xl mt-10">ALL OUR ITEMS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    shopCardDetails &&
                    shopCardDetails.map((details, key) => <ShopCard details={details} key={key}></ShopCard>)
                }
            </div>
        </div>
    );
};

export default Shop;