import useSWR from "swr";


function User(){

    const fetcher = async () => {
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json()
        return data
    }
    

    const {data, error} = useSWR('user', fetcher)

    if(error) return 'An error has accured'
    if(!data) return 'loading'
    console.log(data)
    return (
        <>
        {
            data.map((user) => {
                <tr key={user.id}>
                        <input type="hidden" id="userId" name="id" value = "" />
						<td>
							<span class="custom-checkbox">
								<input type="checkbox" id="data_checkbox" class="data_checkbox" name="data_checkbox" value="" />
								<label htmlFor="data_checkbox"></label>
							</span>
						</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
						<td>
							<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
            })
        }
        </>
    )
}
export default User;