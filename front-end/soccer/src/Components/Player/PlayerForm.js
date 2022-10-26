import React, { createRef } from 'react'
import axios from 'axios'


const PlayerForm = () => {

    const firstName = createRef();
    const lastName = createRef();
    const phone = createRef();
    const email = createRef();


    const submitPlayer = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/Players',
            {
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                phone: phone.current.value,
                email: email.current.value

            })
            .then((res) => console.log(res))
            .catch(e => console.error(e))
    }

    return (
        <div className="row">
            <h1 className='center'>Add a new player</h1>
            <form className="col s12" onSubmit={submitPlayer}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="firstName" ref={firstName} type="text" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastName" ref={lastName} type="text" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="phone" ref={phone} type="text" />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" ref={email} type="text" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>

                <div className="row">
                    <button className='btn waves-effect waves-light' type="submit" name="action">
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </div>


            </form >
        </div >

    );
}

export default PlayerForm;