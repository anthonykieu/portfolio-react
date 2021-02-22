import React from 'react';
import Nav from './components/Nav';

function Header() {
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
            <Nav
                navBar={[]}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            ></Nav>
            <div>
            </div>
        </header>
    )
};

export default Header;