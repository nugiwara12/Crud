function UsersTable() {
    return (
        <>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                        <th>
                            <span className="custom-checkbox">
                            <input type="checkbox" id="selectAll" />
                            <label htmlFor="selectAll" />
                            </span>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <input type="hidden" id="userId" name="id" defaultValue="" />
                        <td>
                            <span className="custom-checkbox">
                            <input
                                type="checkbox"
                                id="data_checkbox"
                                className="data_checkbox"
                                name="data_checkbox"
                                defaultValue=""
                            />
                            <label htmlFor="data_checkbox" />
                            </span>
                        </td>
                        <td>Anand Raj</td>
                        <td>Rajanand9039@gmail.com</td>
                        <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                            <i className="material-icons" data-toggle="tooltip" title="Edit">
                                
                            </i>
                            </a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                            <i className="material-icons" data-toggle="tooltip" title="Delete">
                                
                            </i>
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <input type="hidden" id="userId" name="id" defaultValue="" />
                        <td>
                            <span className="custom-checkbox">
                            <input
                                type="checkbox"
                                id="data_checkbox"
                                className="data_checkbox"
                                name="data_checkbox"
                                defaultValue=""
                            />
                            <label htmlFor="data_checkbox" />
                            </span>
                        </td>
                        <td>Anand Raj</td>
                        <td>Rajanand@gmail.com</td>
                        <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                            <i className="material-icons" data-toggle="tooltip" title="Edit">
                                
                            </i>
                            </a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                            <i className="material-icons" data-toggle="tooltip" title="Delete">
                                
                            </i>
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <input type="hidden" id="userId" name="id" defaultValue="" />
                        <td>
                            <span className="custom-checkbox">
                            <input
                                type="checkbox"
                                id="data_checkbox"
                                className="data_checkbox"
                                name="data_checkbox"
                                defaultValue=""
                            />
                            <label htmlFor="data_checkbox" />
                            </span>
                        </td>
                        <td>Anand Raj</td>
                        <td>Rajanand@gmail.com</td>
                        <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                            <i className="material-icons" data-toggle="tooltip" title="Edit">
                                
                            </i>
                            </a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                            <i className="material-icons" data-toggle="tooltip" title="Delete">
                                
                            </i>
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <input type="hidden" id="userId" name="id" defaultValue="" />
                        <td>
                            <span className="custom-checkbox">
                            <input
                                type="checkbox"
                                id="data_checkbox"
                                className="data_checkbox"
                                name="data_checkbox"
                                defaultValue=""
                            />
                            <label htmlFor="data_checkbox" />
                            </span>
                        </td>
                        <td>Anand Raj</td>
                        <td>Rajanand@gmail.com</td>
                        <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                            <i className="material-icons" data-toggle="tooltip" title="Edit">
                                
                            </i>
                            </a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                            <i className="material-icons" data-toggle="tooltip" title="Delete">
                                
                            </i>
                            </a>
                        </td>
                        </tr>
                    </tbody>
                    </table>

        </>
    )
}

export default UsersTable;