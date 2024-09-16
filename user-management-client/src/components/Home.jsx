import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="py-28 px-56">
            <Link to="/adduser"><button className="btn"><FaUser className="mr-1"/> Add User</button></Link>
        </div>
    );
};

export default Home;