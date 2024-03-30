import Alert from "../component/Alert";
import User from "../component/User";
import Pagination from "../component/Pagination";
import Navbar from "../component/Navbar";
// import "../styles/globals.css";
import AppContext from "../../context/appContext";
import { useContext, useState } from "react";
import { Paginate } from "../../helpers/paginate";
import UsersTable from "../component/UsersTable";
import { Search } from "../../helpers/search";



function Home() {

    const value = useContext(AppContext)

    const [alertMessage , setAlertMessage] = useState("");

    const [saveUser , setSaveUser] = useState({
        username : "",
        email : ""
    })

    const [editUser , setEditUser] = useState({
        id : "",
        email : "",
        username : ""
    })

    const[searchQuery, setSearchQuery] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    let searchedResult;
    let paginatedUsers;
    if(searchQuery.length > 0){
        searchedResult = Search(value?.users , searchQuery);
        paginatedUsers = Paginate(searchedResult.users, currentPage, pageSize);
    }else{
        paginatedUsers = value && value.users ? Paginate(value.users, currentPage, pageSize) : [];
    }

    
    const handleDelete = async (userId) => {
        // Confirm deletion with the user
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    
        if (confirmDelete) {
            const reqOption = {
                method: "DELETE"
            };
        
            try {
                setAlertMessage("User Deleted Successfully");
                // Delete the user
                const response = await fetch(`http://localhost:3000/api/users/${userId}`, reqOption);
                
                if (!response.ok) {
                    throw new Error("Failed to delete user");
                }
        
                // Refresh the page after deletion
                window.location.reload();
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }    
    }

    const handleEditChange = ({target : {name, value}}) => {
        setEditUser({...editUser, [name] : value});
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        const reqOption = {
            method : "PUT",
            headers : {"Content-Type" : "application.json"},
            body : JSON.stringify(editUser) 
        }
        const response = await fetch("http://localhost:3000/api/users/"+editUser.id.reqOption);
        const result = await response.json();
        
        if(result){
            setAlertMessage("User Edited Successfully");
            document.getElementsByClassName("editCancel")[0].click();

            const prevUsers = value.users.filter(user => {
                return user.id !== editUser.id
            })
            prevUsers.push(result);
            value.setMyUsers(prevUsers); 
        }
        
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
        
                    const prevUsers = value.users.map(user => {
                        if (user.id === editUser.id) {
                            return result;
                        }
                        return user;
                    });
                    value.setMyUsers(prevUsers);
                }
            } catch (error) {
                console.error("Error editing user:", error);
                // Handle error, show alert, etc.
            }
        };
        
    }


    return (
        <>
        <Navbar searchQuery = {searchQuery} setSearchQuery={setSearchQuery} />
        <Alert text = {alertMessage} setAlertMessage = {setAlertMessage} style={alertMessage.length > 0 ? 'block' : 'none'} />
        <div className="flex-grow">
          <UsersTable setEditUser = {setEditUser} users = {paginatedUsers} handleDelete = {handleDelete} />
          <Pagination usersCount = {searchQuery.length > 0 ? searchedResult.length : value?.users.length} currentPage = {currentPage} pageSize = {pageSize} onPageChange = {onPageChange} />
        </div>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="container mx-auto px-4">
                            {/* modal funxtion */}
                        </div>
                        
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home;