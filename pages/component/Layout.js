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


    const handleEditSubmit = async (e) => {
        e.preventDefault();
    
        const reqOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editUser)
        };
    
        try {
            const response = await fetch("http://localhost:3000/api/users/" + editUser.id, reqOptions);
            const result = await response.json();
    
            if (result) {
                setAlertMessage("User Edited Successfully");
                document.getElementsByClassName("editCancel")[0].click();
    
                // Update the state with the edited user
                const updatedUsers = data.users.map(user => {
                    if (user.id === editUser.id) {
                        return result; // Update the edited user
                    }
                    return user; // Return unchanged user
                });
                setData({ ...data, users: updatedUsers }); // Update the users data in state
            }
        } catch (error) {
            console.error("Error editing user:", error);
            // Handle error, show alert, etc.
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