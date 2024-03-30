"use client"

import { useState } from 'react';

function Alert({text, style, setAlertMessage}) {
    const [showAlert, setShowAlert] = useState(true);

    const handleAlert = (e) => {
        e.preventDefault();
        setAlertMessage("");

    };

    return (
        <>
        {showAlert && (
                <div className="alert w-1/2 mx-auto mt-4 bg-green-500 text-white p-4 rounded-lg relative" style={{display : style}} role="alert">
                    <span> {text} </span>
                    <button type="button" className="close" onClick={(e) => handleAlert(e)} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}

        </>
    )
}

export default Alert;