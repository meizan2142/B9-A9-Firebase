import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export const EstateContext = createContext()
const ContextComponent = ({children}) => {
    const [estateDetails, setEstateDetails] = useState([])
    useEffect(() => {
        fetch('/public/estate.json')
        .then((res) => res.json())
        .then((data) => {
            setEstateDetails(data)
        })
    },[])
    return (
        <div>
            <EstateContext.Provider value={{estateDetails}}>{children}</EstateContext.Provider>
        </div>
    );
};
ContextComponent.propTypes = {
    children: PropTypes.node
}
export default ContextComponent;