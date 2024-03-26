function User(){
    return (
        <>
            <input type="hidden" id="userId" name="id" value="" />
            <span class="flex items-center">
                <input type="checkbox" id="data_checkbox" class="form-checkbox data_checkbox" name="data_checkbox" value="" />
                <label for="data_checkbox" class="ml-2"></label>
            </span>
            <span class="ml-2">Anand Raj Rajanand@gmail.com</span>
            <a href="#editEmployeeModal" class="edit ml-2" data-toggle="modal">
                <i class="material-icons" data-toggle="tooltip" title="Edit">
                    
                </i>
            </a>
            <a href="#deleteEmployeeModal" class="delete ml-2" data-toggle="modal">
                <i class="material-icons" data-toggle="tooltip" title="Delete">
                    
                </i>
            </a>

        </>
    )
}
export default User;