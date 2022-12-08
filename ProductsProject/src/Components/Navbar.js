import React, { useState } from 'react'
import AddProducts from './AddProduct';
import './components.css'
import 'reactjs-popup/dist/index.css';
import { BiGridAlt, BiListUl } from "react-icons/bi";

const Navbar = ({ changeView, setChangeView }) => {

    const [openPopup, setOpenPopup] = useState(false);

    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid mx-2">
                    <div className='justify-content-start'>
                        <a className="navbar-brand">Products</a>
                        <button className="btn btn-outline-danger btn-sm" onClick={() => setOpenPopup(true)}>+ Add New</button>
                        <AddProducts trigger={openPopup} setTrigger={setOpenPopup}></AddProducts>
                    </div>
                    <div className='row justify-content-end'>
                        <form className="d-flex col-md-10" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <button className=" btn btn-outline-warning col-md-2" onClick={() => setChangeView(!changeView)}>
                            {changeView ? <BiGridAlt size="20" color="black"></BiGridAlt> : <BiListUl size="20" color="black"></BiListUl>}
                        </button>
                    </div>


                </div>
            </nav>
        </div >
    )
}

export default Navbar
