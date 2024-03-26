"use client"


import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { Fragment, useState } from "react";
import Modal from "./Modal";




function Navbar() {

  const [showModal, setShowModal,] = useState(false);

  return (
    <>
    <main>
    <Fragment>
        <div class="bg-gray-800">
                  <div class="container mx-auto px-4">
                      <div class="flex justify-between items-center py-4">
                          <div class="flex-1">
                              <h2 class="text-xl font-bold text-white">NextJS-MySQL <span class="font-normal">CRUD</span></h2>
                          </div>
                          <div class="flex items-center space-x-4">
                              <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded inline-flex items-center ml-4"
                            onClick={() => setShowModal(true)} onClose={() => setShowModal(false)}>
                                <IoIosAddCircle /> 
                                Add Users
                            </button>
                              <a href="#" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded inline-flex items-center">
                                  <i class="material-icons"><MdDelete /></i>
                                  <span>Delete</span>
                              </a>
                              <input type="text" class="form-input w-56 h-10" name="search_user" placeholder="Search a username..." />
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