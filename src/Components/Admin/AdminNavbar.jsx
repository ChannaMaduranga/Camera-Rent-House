import React from 'react'
import { Link } from 'react-router-dom'


function AdminNavbar() {
    return (
        <div>
            <nav className="bg-white  py-4 relative z-50 border-2 border-gray-300 w-full">
                <div className="    flex items-center justify-between w-full px-6">
                    <div className="text-lg font-bold text-teal-600">
                        {/* <Link to="/"><img src={logo} width={50} alt="" /></Link> */}
                        <Link to="/">Camera Rent House</Link>
                    </div>
                   
                </div>

            </nav >
        </div>
    )
}

export default AdminNavbar