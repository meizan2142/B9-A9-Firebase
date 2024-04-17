import { Helmet } from "react-helmet-async";

const UserProfile = () => {
    return (
        <div className='lg:w-[1192px] mx-auto'>
            <Helmet>
                <title>SOLAZ--UserProfile</title>
            </Helmet>
            User Profile
        </div>
    );
};

export default UserProfile;