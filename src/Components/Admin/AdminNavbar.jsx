import React from 'react'
import { Link } from 'react-router-dom'


function AdminNavbar() {
    return (
        <div>
            <nav className="bg-white  py-4 relative z-50 border-2 border-gray-300">
                <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
                    <div className="text-lg font-bold text-teal-600">
                        {/* <Link to="/"><img src={logo} width={50} alt="" /></Link> */}
                        <Link to="/">Camera Rent House</Link>
                    </div>
                    <div>
                        <button className="hidden lg:flex bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-900">
                            Log out
                        </button>
                    </div>
                </div>

            </nav >
        </div>
    )
}

export default AdminNavbar