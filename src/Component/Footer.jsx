import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#3c3c34] lg:h-[40vh] mt-12 lg:mt-24">
            <div className='lg:w-[1192px] mx-auto text-center '>
                <div className="lg:pt-32 lg:space-y-10 lg:p-0 p-4">
                    <NavLink to="/" className="btn btn-ghost text-2xl lg:text-4xl font-bold text-white">SOLAZ</NavLink>
                    <div className="text-[#858585] space-y-3">
                        <p>14 Tottenham Court Road, London, England - (102) 3456 789 - info@yourdomain.com</p>
                        <p>Copyright © 2024 Solaz Villa Hotel</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;