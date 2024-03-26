function User(){
    return (
        <>
            <input type="hidden" id="userId" name="id" defaultValue="" />
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
                    Anand Raj Rajanand@gmail.com
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
        </>
    )
}
export default User;