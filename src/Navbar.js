import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

//For getting information on how to do the responsive navbar.
//I referred to https://www.youtube.com/watch?v=amf18mxNX18&t=374s

function Navbar() {
	const navRef = useRef();

	const showBar = () => {
		navRef.current.classList.toggle(
			"mini-nav"
		);
	};
    const closeBar = () => {
		navRef.current.classList.toggle(
			"mini-nav"
		);
	};

	return (
		<header>
			<Link to="/" className="navbar-logo">
                <img src="https://media.tenor.com/XyNq9PqC8FIAAAAi/niko-oneshot-niko-vibe.gif" alt="placeholder logo" style={{ maxWidth: 75 }}/>
            </Link>

            <nav ref={navRef}>
                <Link to='/' className='menu-links' onClick={closeBar}>
                    Home
                </Link>
                <Link to='/blogs' className='menu-links' onClick={closeBar}>
                    Blogs
                </Link>
                <Link to='/about-me' className='menu-links' onClick={closeBar}>
                    About Me
                </Link>
                <button className="nav-btn nav-close-btn" onClick={closeBar}><FaTimes/></button>
            </nav>
            <button className="nav-btn" onClick={showBar}><FaBars/></button>
		</header>
	);
}

export default Navbar;