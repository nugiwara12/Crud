import Alert from "./Alert";
import UsersTable from "./UsersTable";
// import User from "./User";
import Pagination from "./Pagination";
import Navbar from "./Navbar";
// import "../styles/globals.css";
import AppContext from "../../context/appContext";
import { useContext } from "react";
import { Paginate } from "../../helpers/paginate";


function Layout() {

    const value = useContext(AppContext)

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    let paginatedUsers = Paginate(value.users, currentPage, pageSize);

    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="container mx-auto px-4">
                            <form action="#" method="POST">
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
                                        <label className="block mb-1">Name</label>
                                        <input
                                            type="text"
                                            className="form-input w-full"
                                            name="username"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="block mb-1">Email</label>
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
                                        className="btn btn-default mr-2"
                                        data-dismiss="modal"
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