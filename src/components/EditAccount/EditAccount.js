import React, { useState } from 'react'
import { withRouter } from 'react-router-dom' // lekcija s02e14


function EditAccount(props) { // dodali props

    // !!! bio state

    const [account, setAccount] = useState(props.accounts.filter(acc => acc.id == props.match.params.id)[0])


    // !!! NE TRENBA JER JE DIREKTNO UBACENA U USE STATE !!!
    // componentDidMount() {
    //     const accountForEdit = this.props.accounts.filter(acc => acc.id == this.props.match.params.id)[0]
    //     this.setState({account:accountForEdit})
    // }



    // !!! NE TREBA JER KORISTIMO HOOKS I MENJAMO LOGIKU U JSX
    // changeAccount = (event) => {
    //     const copyOfAccount = { ...this.state.account }
    //     copyOfAccount[event.target.id] = event.target.value;
    //     this.setState({ account: copyOfAccount })
    // }

    const editAccount = () => {
        props.editAccount(account);
        props.history.push("/");
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Edit Account</h2>
                    <div className="row">
                        <input onChange={ e=>{ setAccount({...account,name:e.target.value}) } } type="text" id="name" className="form-control" value={account.name} /><br />
                        <input onChange={ e=>{ setAccount({...account,lastname:e.target.value}) } } type="text" id="lastname" className="form-control" value={account.lastname} /><br />
                        <input onChange={ e=>{ setAccount({...account,phone:e.target.value}) } } type="text" id="phone" className="form-control" value={account.phone} /><br />
                        <input onChange={ e=>{ setAccount({...account,email:e.target.value}) } } type="text" id="email" className="form-control" value={account.email} /><br />
                        <button onClick={editAccount} className="form-control btn btn-info">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(EditAccount);