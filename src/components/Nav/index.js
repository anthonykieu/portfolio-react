import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
function Nav(props) {
    
 
    const {
        navBar = [],
        currentPage,
        setCurrentPage
    } = props;
    
    return (

            <nav>
                <ul className="navBar">
                    
                    {navBar.map((bar) => (
                       <li 
                       className={`${currentPage === bar && 'navActive'}`} onClick={() => setCurrentPage(bar)}>
                        {bar}
                    </li> 
                    ))}
                    
                </ul>
            </nav>

    )
};

export default Nav;