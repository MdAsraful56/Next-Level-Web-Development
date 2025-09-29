const Navbar = () => {
    return (
        <div className='navbar-container flex items-center justify-between p-4 bg-gray-800 text-white'>
            <h1>My Blog</h1>
            <nav className='navbar'>
                <ul className='flex space-x-4 flex-col md:flex-row'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
