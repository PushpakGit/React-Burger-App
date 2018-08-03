import React from 'react';
import './UserOutput.css'

const UserOutput = function userOutput(props){
    return( <div className="UserOutput">
                <p>This is output Username:</p>
                <p>{props.username}</p>
            </div>
    );
}

export default UserOutput;