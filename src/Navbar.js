import { Link } from 'react-router-dom'; //the package ensures that the request does not go to the server every time its made

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;