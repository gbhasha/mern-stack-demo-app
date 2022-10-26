import React from 'react'
const PlayerSingle = ({ player }) => {
    const { firstName, lastName, phone, email, team } = player;

    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.webp" width="300px" alt="soccer" />
                        <span className="card-title">{firstName} {lastName}</span>
                    </div>
                    <div className="card-content">
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                    </div>
                    <div className="card-action">
                        <p>Team: {team}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerSingle;