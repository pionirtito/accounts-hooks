import React, { useState,useEffect,useRef } from 'react'
import { withRouter } from 'react-router-dom' // HOC iz RRD


function AddAcount(props) { // !!! dodajemo props i brisemo this u fbc

    const [newAccount, setNewAccount] = useState({ id: "", name: "", lastname: "", phone: "", email: "" })

    // !!! changeHandler vise ne treba...menjamo logiku jsx zbog hooksa

    const addNewAccount = () => {
        props.addNewAccountToState(newAccount)
        props.history.push("/") // preko HOC saljemo na "/"
    }

    // useeffect+useref -> focus na id polje
    const idInput = useRef();
    useEffect(() => {
        idInput.current.focus ();
    },[])

    return (
        <div className="cointainer">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Add Account</h2>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input type="text" ref={idInput} onChange={ e=>{ setNewAccount({...newAccount,id:e.target.value}) } } placeholder="id" className="form-control" /><br />
                            <input type="text" onChange={ e=>{ setNewAccount({...newAccount,name:e.target.value}) } } placeholder="name" className="form-control" /><br />
                            <input type="text" onChange={ e=>{ setNewAccount({...newAccount,lastname:e.target.value}) } } placeholder="lastname" className="form-control" /><br />
                            <input type="text" onChange={ e=>{ setNewAccount({...newAccount,phone:e.target.value}) } } placeholder="phone" className="form-control" /><br />
                            <input type="text" onChange={ e=>{ setNewAccount({...newAccount,email:e.target.value}) } } placeholder="email" className="form-control" /><br />
                            <button onClick={addNewAccount} className="btn btn-primary form-control">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default withRouter(AddAcount);