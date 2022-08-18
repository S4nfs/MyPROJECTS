import React from 'react';

export const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h4>Hello World From ✏️Functional Component {props.name}</h4>
            {props.child}
        </div>
    )
}

// export default Header;