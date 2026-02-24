import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            {/* Logo area */}
            <div className="logo" style={{ flex: 1 }}>
                <h1>🍲 Atik Bilao</h1>
            </div>

            {/* Navigation links */}
            <nav style={{ flex: 1, textAlign: 'right' }}>
                <ul style={{ display: 'flex', justifyContent: 'flex-end', margin: 0 }}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;