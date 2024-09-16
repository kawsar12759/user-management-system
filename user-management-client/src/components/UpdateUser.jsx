import { Link, useLoaderData } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Swal from 'sweetalert2'


const UpdateUser = () => {
    const user = useLoaderData();
    const handleUpdateUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const newUser = { name, email, gender, status }
        fetch(`https://user-management-server-qbzah4sa1-md-kawsar-hossains-projects.vercel.app/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Information Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }
    return (
        <div className="py-28 px-56">
            <Link to="/"><button className="btn"><IoMdArrowRoundBack className="mr-1" /> All Users</button></Link>

            <h2 className="text-center text-3xl font-semibold mt-10 mb-3">Update User</h2>
            <p className="text-gray-400 text-center text-xl">Use the below form to update user account</p>
            <form className="
            w-2/3 mx-auto mt-8" onSubmit={handleUpdateUser}>
                <div className="form-control">
                    <label className="label">
                        <span className=" text-gray-400 label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Enter Your Name" defaultValue={user.name}
                        name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-gray-400">Email</span>
                    </label>
                    <input type="email" placeholder="Enter Your Email" defaultValue={user.email} name="email" className="input input-bordered" required />
                </div>
                <div className="form-control mt-3">

                    <div className="flex items-center">
                        <label className="label mr-7">
                            <span className="label-text text-gray-400">Gender</span>
                        </label>
                        <div className="flex items-center mr-5">
                            <input
                                id="male"
                                type="radio"
                                value="Male"
                                name="gender"
                                defaultChecked={user.gender === "Male"}
                                className="w-4 h-4   focus:accent-indigo-500 accent-indigo-500"
                                required
                            />
                            <label htmlFor="male" className="ml-2 text-sm font-medium text-gray-900">Male</label>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="female"
                                type="radio"
                                value="Female"
                                name="gender"
                                defaultChecked={user.gender === "Female"}
                                className="w-4 h-4  focus:accent-indigo-500 accent-indigo-500"
                                required
                            />
                            <label htmlFor="female" className="ml-2 text-sm font-medium text-gray-900">Female</label>
                        </div>

                    </div>
                </div>
                <div className="form-control mt-3">

                    <div className="flex items-center">
                        <label className="label mr-7">
                            <span className="label-text text-gray-400">Status</span>
                        </label>
                        <div className="flex items-center mr-5">
                            <input
                                id="active"
                                type="radio"
                                value="Active"
                                name="status"
                                defaultChecked={user.status === "Active"}
                                className="w-4 h-4   focus:accent-indigo-500 accent-indigo-500"
                                required
                            />
                            <label htmlFor="active" className="ml-2 text-sm font-medium text-gray-900">Active</label>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="inactive"
                                type="radio"
                                value="Inactive"
                                name="status"
                                defaultChecked={user.status === "Inactive"}
                                className="w-4 h-4  focus:accent-indigo-500 accent-indigo-500"
                                required
                            />
                            <label htmlFor="female" className="ml-2 text-sm font-medium text-gray-900">Inactive</label>
                        </div>

                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-indigo-500 text-white  text-lg font-medium hover:bg-indigo-700 border-none">Save</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;