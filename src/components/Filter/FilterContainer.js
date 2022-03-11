import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";

const FilterContainer = ({renderContent}) => {
    const [filters, setFilters] = useState([]);
    const {allFilter} = useSelector(state => state.filter);
    useEffect(() => {
        setFilters(renderContent(allFilter));
    }, [allFilter])
    const container = filters.length > 0 ? filters?.map(item => item) : null;
    return (
        <>
            {container}
        </>
    )
}
export default FilterContainer;