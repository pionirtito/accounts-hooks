// npm install bootstrap react-router-dom --save // save znaci da ga sacuva unutar packge.json
import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';//lekcija s02e14
import AccountsTable from './components/AccountsTable/AccountsTable';
import AddAcount from './components/AddAccount/AddAccount';
import EditAccount from './components/EditAccount/EditAccount';
import EditTable from './components/EditTable/EditTable';
import Header from './components/Header/Header';



function App () { // !!! metode unutar FBC treba da budu definisane (const ispred imena metode)


    const [accounts, setAccounts] = useState([
        { id: 1, name: "Nikola", lastname: "Savic", phone: "11-11-11", email: "nikola@nanofaktura.com" },
        { id: 2, name: "Neda", lastname: "Cvetkovic", phone: "22-22-22", email: "neda@nanofaktura.com" }
    ])

    const addNewAccountToState = (acc) => { // prima novi account iz addNewAccount metode iz AddAccoount
        setAccounts([...accounts, acc])
    }

    const deleteAccount = (id) => { // !!! nema vise copyAccounts i this.
        const newCopyAccounts = accounts.filter(account => account.id !== id); //treba da vrati svaki id koji nije ovaj sto smo poslali (kliknuli)
        setAccounts(newCopyAccounts)
    }

    const editAccount = (acc) => { // !!! nema vise copyAccounts i this.setState        
        let accountPossition=accounts.map(account=>account.id).indexOf(acc.id);
        accounts[accountPossition] = acc;
        setAccounts(accounts)
    }

        // brismemo this i this.state koji su bili zbog CBC
        return (
            <BrowserRouter>
                <Header />
                <Route path="/" exact>
                    <AccountsTable accounts={accounts} />
                </Route>
                <Route path="/add">
                    <AddAcount addNewAccountToState={addNewAccountToState} />
                </Route>

                <Switch>
                    
                    <Route path="/edit/:id">
                        <EditAccount accounts={accounts} editAccount={editAccount} />
                    </Route>
                    <Route path="/edit">
                        <EditTable accounts={accounts} deleteAccount={deleteAccount} />
                    </Route>
                </Switch>

            </BrowserRouter>
        );
    
}

export default App;