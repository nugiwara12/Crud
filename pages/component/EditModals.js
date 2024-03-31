"use client"

import {react, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";
import Navbar from "./Navbar";



const EditModals = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    const [editUser , setEditUser] = useState({
        id : "",
        email : "",
        username : ""
    })

    const handleEditChange = ({target : {name, value}}) => {
        setEditUser({...editUser, [name] : value});
    }

    const handleEditSubmit = async (updatedUser) => {
        try {
            const reqOption = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedUser)
            };
    
            // Send the PUT request to update the user data
            const response = await fetch(`http://localhost:3000/api/users/${updatedUser.id}`, reqOption);
    
            if (!response.ok) {
                throw new Error("Failed to update user");
            }
    
            // Set alert message for successful update
            setAlertMessage("User Updated Successfully");
    
            // Update the user list with the updated user data
            const updatedUsers = value.users.map(user => {
                if (user.id === updatedUser.id) {
                    return updatedUser;
                }
                return user;
            });
            value.setMyUsers(updatedUsers);
        } catch (error) {
            console.error("Error updating user:", error);
            // Handle error, show alert, etc.
            setAlertMessage("Error updating user. Please try again.");
        }
    };

    
    const [myUsers, setMyUsers] = useState([]);
    


    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="w-[40rem] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={onClose}>
                    <IoIosCloseCircle />
                </button>
                <div className="bg-white p-6 rounded border border-black mt-10">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Edit Employee</h2>
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleEditSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                <input value={editUser.username} onChange={handleEditChange} type="text" id="username" name="username" className="w-full px-3 py-2 border border-gray-500 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input value={editUser.email} onChange={handleEditChange} type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-500 rounded-md" />
                            </div>
                            <div className="flex">
                                <button type="submit" onClick={handleEditSubmit} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mr-3">Add</button>
                                <button type="button" className="bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900" onClick={onClose}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default EditModals;