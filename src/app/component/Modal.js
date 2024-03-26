import {react} from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";
import Navbar from "./Navbar";


const Modal = ({isVisible, onClose}) => {
    if ( !isVisible ) return null;

const handleClose = (e) => {
    if(e.target.id === 'wrapper') onClose();
}

    
    return (
    <>
        <div className="fixed inset-0 bg-black bg-opacity-25 
            backdrop-blur-sm flex justify-center item-center" id="wrapper" onClick={handleClose}>

            <div className="w-[40rem] flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()}>
                    {/* <IoIosCloseCircle /> */}
                </button>
                <div className="bg-white p-2 rounded  border border-black mt-10">
                
                <div class="max-w-2xl mx-auto my-10 p-6 bg-white rounded-md shadow-md sm:landscape">
                    <h2 class="text-2xl font-semibold mb-6 text-center">Add Employee</h2>
                    <form class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="mb-4">
                            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                            <input type="text" id="username" class="w-full px-3 py-2 border border-gray-500 rounded-md" />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" id="email" class="w-full px-3 py-2 border border-gray-500 rounded-md" />
                        </div>
                        <div class="mb-4">
                            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input type="password" id="password" class="w-full px-3 py-2 border border-gray-500 rounded-md" />
                        </div>
                        <div class="mb-6">
                            <label for="confirmPassword" class="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                            <input type="password" id="confirmPassword" class="w-full px-3 py-2 border border-gray-500 rounded-md" />
                        </div>
                        <div class="flex">
                            <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mr-3">Add</button>
                            <button type="button" class="bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900" onClick={() => onClose()}>Cancel</button>
                        </div>
                    </form>
                </div>


                            
                </div>
            </div>
        </div>

        
    </>
    )
}

export default Modal