import React from 'react';

const UserInput = function userInput(props){
    return( <div>
                <input style={props.style} type="text" value={props.username} onChange={props.changed} />
            </div>
    );
}

export default UserInput;