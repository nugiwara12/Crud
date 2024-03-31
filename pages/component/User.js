import useSWR from "swr";
import Layout from "./Layout";
import Link from "next/link";
import { Fragment, useState } from "react";
import EditModals from "./EditModals"

function User({ user, handleDelete, setEditUser }) {
    const fetcher = async () => {
        const response = await fetch('http://localhost:3000/api/users/');
        const data = await response.json();
        return data;
    };

    const [showModal, setShowModal,] = useState(false);

    
    const { data, error } = useSWR('user', fetcher);

    if (error) return 'An error has occurred';
    if (!data) return 'Loading';

    return (
        <>
            <Fragment>
                {data.users.map((item, index) => (
                    <tr key={item.id}>
                        <input type="hidden" id="userId" name="id" value={item.id} />
                        <td>
                            <span className="custom-checkbox">
                                <input type="checkbox" id="data_checkbox" className="data_checkbox" name="data_checkbox" value="" />
                                <label htmlFor="data_checkbox"></label>
                            </span>
                        </td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>
                            <div className="flex items-center">
                                <a href="#deleteEmployeeModal" onClick={() => setShowModal(true)} className="delete flex items-center justify-center rounded-full bg-blue-500 text-white w-10 h-10" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Delete">edit</i>
                                </a>

                                <a href="#deleteEmployeeModal" onClick={() => handleDelete(item.id)} className="delete flex items-center justify-center rounded-full bg-red-500 text-white w-10 h-10" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Delete">delete</i>
                                </a>
                            </div>
                        </td>
                    </tr>
                ))}
                <EditModals isVisible={showModal} onClose={() => setShowModal(false)}/>
            </Fragment>
        </>
    );
}

export default User;
