function User(){
    return (
        <>
            <input type="hidden" id="userId" name="id" value="" />
            <span className="flex items-center">
                <input type="checkbox" id="data_checkbox" className="form-checkbox data_checkbox" name="data_checkbox" value="" />
                <label htmlFor="data_checkbox" className="ml-2"></label>
            </span>
            <span className="ml-2">Anand Raj Rajanand@gmail.com</span>
            <a href="#editEmployeeModal" className="edit ml-2" data-toggle="modal">
                <i className="material-icons" data-toggle="tooltip" title="Edit">
                    
                </i>
            </a>
            <a href="#deleteEmployeeModal" className="delete ml-2" data-toggle="modal">
                <i className="material-icons" data-toggle="tooltip" title="Delete">
                    
                </i>
            </a>

        </>
    )
}
export default User;