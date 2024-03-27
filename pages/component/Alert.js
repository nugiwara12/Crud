"use client"

import { useState } from 'react';

function Alert() {
    const [showAlert, setShowAlert] = useState(true);

    const handleClose = () => {
        setShowAlert(false);
    };

    return (
        <>
        {showAlert && (
                <div className="alert w-1/2 mx-auto mt-4 bg-green-500 text-white p-4 rounded-lg relative">
                    <span>Data Added successfully</span>
                    <button type="button" className="absolute top-0 right-0 mt-1 mr-1 text-white" onClick={handleClose} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}

        </>
    )
}

export default Alert;