import React, { useState } from 'react'
import './components.css';
import { BiX } from "react-icons/bi";
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase-config";
import 'reactjs-popup/dist/index.css';


const AddProducts = (props) => {

    const [name, setName] = useState("");
    const [coordinates, setCoordinates] = useState("");
    const [format, setFormat] = useState();

    const productsCollectionRef = collection(db, "products");

    const add = async (e) => {
        e.preventDefault();
        await addDoc(productsCollectionRef, { name: name, coordinates: coordinates, format: format });
    };


    return (props.trigger) ? (
        <div className="popup">
            <div className="popupTop ">
                <div className="row">
                    <p className='col-md-10'>Add New Device</p>
                    <p className=" col-md-2 closeBtn" onClick={() => props.setTrigger(false)}>
                        <BiX size="20" color="black"></BiX>
                    </p>
                    {props.children}
                </div>
            </div>
            <div className="popupContent">
                <form autoComplete='off' className="form-group"
                    onSubmit={add}>
                    <div className="mb-3 inputAP">
                        <label className="form-label">Name *</label>
                        <input className="form-control"
                            required
                            onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className="mb-3 inputAP">
                        <label className="form-label">Coordinates *</label>
                        <input className="form-control"
                            required
                            onChange={(e) => setCoordinates(e.target.value)} value={coordinates} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Format *</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="format" value={"16:9"}
                                onChange={(e) => setFormat(e.target.value)} /> 16:9
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="format" value={"4:3"}
                                onChange={(e) => setFormat(e.target.value)} /> 4:3
                        </div>
                    </div>
                </form>
                <div className="mb-3">
                <button className="btn btn-success" onClick={add}>Submit</button>
                </div>
            </div>
        </div>


    ) : "";
}

export default AddProducts;