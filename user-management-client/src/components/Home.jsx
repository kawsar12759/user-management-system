import Swal from 'sweetalert2'
import { FaPencilAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from 'react';

const Home = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    let count = 1;
    const handleDeleteUser = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://user-management-server-qbzah4sa1-md-kawsar-hossains-projects.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                            const remaining = users.filter(user => user._id !== id);
                            setUsers(remaining);
                        }
                    })

            }
        });
    }
    return (
        <div className="py-28 px-56">
            <Link to="/adduser"><button className="btn"><FaUser className="mr-1" /> Add User</button></Link>

            <div className="overflow-x-auto mt-14 w-3/4 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-zinc-700 text-lg  text-white text-center">
                            <th>ID</th>
                            <th>Name</th>
                            <th>@Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            users.map(user => (

                                <tr key={user._id} className="text-center">
                                    <th>{count++}</th>
                                    <td >{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.status}</td>
                                    <td className="text-indigo-500"><Link to={`/updateuser/${user._id}`}><button className="btn text-indigo-500 mr-5"><FaPencilAlt /></button></Link>
                                        <button className="btn text-indigo-500" onClick={() => handleDeleteUser(user._id)}><ImCross /></button>
                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;