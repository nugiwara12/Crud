import {react, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";
import Navbar from "./Navbar";


const Modal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    const [saveUser, setSaveUser] = useState({
        username: "",
        email: ""
    });

    const handleSaveChange = (e) => {
        const { name, value } = e.target;
        setSaveUser({ ...saveUser, [name]: value });
    };

    const handleAddSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
        // Confirm addition with the user
        const confirmAdd = window.confirm("Are you sure you want to add this item?");
    
        if (confirmAdd) {
            const reqOption = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(saveUser)
            }
    
            try {
                const response = await fetch("http://localhost:3000/api/users/", reqOption);
                const result = await response.json();
                
                setSaveUser({
                    username : "",
                    email : ""
                })
    
                if (result) {
                    onClose();
                    // Display a success alert message
                    window.alert("User added successfully!");
                    // Refresh the page after adding the item
                    window.location.reload();
                }
            } catch (error) {
                console.error("Error adding user:", error);
                // Display an error alert message
                window.alert("Error adding user. Please try again.");
            }
        }
    }
    

    const [myUsers, setMyUsers] = useState([]);
    


    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="w-[40rem] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={onClose}>
                    <IoIosCloseCircle />
                </button>
                <div className="bg-white p-6 rounded border border-black mt-10">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Add Employee</h2>
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleAddSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                <input value={saveUser.username} onChange={handleSaveChange} type="text" id="username" name="username" className="w-full px-3 py-2 border border-gray-500 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input value={saveUser.email} onChange={handleSaveChange} type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-500 rounded-md" />
                            </div>
                            <div className="flex">
                                <button type="submit" onClick={handleAddSubmit} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mr-3">Add</button>
                                <button type="button" className="bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900" onClick={onClose}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Modal;