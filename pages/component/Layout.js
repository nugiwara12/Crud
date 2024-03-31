// import { useEffect,useState,useContext } from "react";
import Alert from "./Alert";
import UsersTable from "./UsersTable";
// import User from "./User";
import Pagination from "./Pagination";
import Navbar from "./Navbar";
// import "../styles/globals.css";
import AppContext from "../../context/appContext";
import { useContext, useState } from "react";
import { Paginate } from "../../helpers/paginate";



function Layout() {

    const value = useContext(AppContext)

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    let paginatedUsers = value?.users ? Paginate(value.users, currentPage, pageSize) : [];

    const [editUser , setEditUser] = useState({
        id : "",
        email : "",
        username : ""
    })

    const handleEditChange = ({target : {name, value}}) => {
        setEditUser({...editUser, [name] : value});
    }

    const handleEditSubmit = async (updatedUser) => {
        try {
            const reqOption = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedUser)
            };
    
            // Send the PUT request to update the user data
            const response = await fetch(`http://localhost:3000/api/users/${updatedUser.id}`, reqOption);
    
            if (!response.ok) {
                throw new Error("Failed to update user");
            }
    
            // Set alert message for successful update
            setAlertMessage("User Updated Successfully");
    
            // Update the user list with the updated user data
            const updatedUsers = value.users.map(user => {
                if (user.id === updatedUser.id) {
                    return updatedUser;
                }
                return user;
            });
            value.setMyUsers(updatedUsers);
        } catch (error) {
            console.error("Error updating user:", error);
            // Handle error, show alert, etc.
            setAlertMessage("Error updating user. Please try again.");
        }
    };
    
    

    

    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="container mx-auto px-4">
                            <form onSubmit = {handleEditSubmit} >
                                <div className="modal-header">
                                    <h4 className="modal-title">Add Employee</h4>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                    >
                                        ×
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label value={editUser.username} onChange={handleEditChange} className="block mb-1">Name</label>
                                        <input
                                            type="text"
                                            className="form-input w-full"
                                            name="username"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label value={editUser.email} onChange={handleEditChange} className="block mb-1">Email</label>
                                        <input
                                            type="email"
                                            className="form-input w-full"
                                            name="email"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-default mr-2 editCancel"
                                        data-dismiss="modal" value="cancel"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Layout;