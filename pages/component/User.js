import useSWR from "swr";
import { Search } from "../../helpers/search";


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
                        data?.users.map((item, index) => (
                            <tr key={item.id}>
                            <input type="hidden" id="userId" name="id" value = "" />
                                    <td>
                                    <span class="custom-checkbox">
                                            <input type="checkbox" id="data_checkbox" class="data_checkbox" name="data_checkbox" value="" />
                                            <label htmlFor="data_checkbox"></label>
                                    </span>
                                </td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                <div class="flex items-center">
                                    <a href="#editEmployeeModal" class="edit flex items-center justify-center rounded-full bg-blue-500 text-white w-10 h-10 mr-2" data-toggle="modal">
                                        <i class="material-icons" data-toggle="tooltip" title="Edit">edit</i>
                                    </a>
                                    <a href="#deleteEmployeeModal" class="delete flex items-center justify-center rounded-full bg-red-500 text-white w-10 h-10" data-toggle="modal">
                                        <i class="material-icons" data-toggle="tooltip" title="Delete">delete</i>
                                    </a>
                                </div>


                            </td>
                        </tr>
                            ))
                    }
        </>
    )
}
export default User;