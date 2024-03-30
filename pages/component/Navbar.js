"use client"


import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { Fragment, useState } from "react";
import Modal from "./Modal";
import { Search } from "../../helpers/search";



function Navbar({searchQuery , setSearchQuery}) {

  const [showModal, setShowModal,] = useState(false);


  return (
    <>
    <main>
    <Fragment>
            <div className="bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center py-4">
                    <div className="flex-1 mb-4 md:mb-0">
                        <h2 className="text-xl font-bold text-white">NextJS-MySQL <span className="font-normal">CRUD</span></h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded inline-flex items-center" onClick={() => setShowModal(true)}>
                        <IoIosAddCircle className="mr-2 md:mr-1" /> 
                        <span className="hidden md:inline-block">Add Users</span>
                        </button>
                        <a href="#" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded inline-flex items-center">
                        <i className="material-icons"><MdDelete /></i>
                        <span className="hidden md:inline-block">Delete</span>
                        </a>
                        <input value = {searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" className="form-input w-full md:w-56 h-10" name="search_user" placeholder="Search a username..." />
                    </div>
                    </div>
                </div>
            </div>


        <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
    </Fragment>
    </main>
    
           

    </>
  )
}
export default Navbar;