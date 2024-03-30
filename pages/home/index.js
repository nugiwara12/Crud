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

    const [saveUser , setSaveUser] = useState({
        username : "",
        email : ""
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


    return (
        <>
        <Navbar searchQuery = {searchQuery} setSearchQuery={setSearchQuery} />
        <Alert />
        <div className="flex-grow">
          <UsersTable users = {paginatedUsers} handleDelete = {handleDelete} />
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