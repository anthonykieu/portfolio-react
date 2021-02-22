import React from 'react';

const Nav = (props) => {
    
 
    const {
        navBar = [],
        currentPage,
        setCurrentPage
    } = props;
    
    return (
        <header>
            <div>
                <h1>
                    Anthony Kieu
                </h1>
            </div>
            <div>
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
            </div>
        </header>
    )
};

export default Nav;
