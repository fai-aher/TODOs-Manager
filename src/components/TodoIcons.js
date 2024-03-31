import React from 'react';
import { ReactComponent as CheckSvg } from '../media/checkIcon.svg';
import { ReactComponent as DeleteSvg} from '../media/deleteIcon.svg';

const iconTypes = {
    "check": (color) => <CheckSvg className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSvg className="Icon-svg" fill={color} />
  }

function TodoIcons({ type, color, onClick }) {

    return (
        <span className= {`Icon-container Icon-container-${type}`}
            onClick = {onClick}
        >
            {iconTypes[type](color)}
        </span>
    );

}

export { TodoIcons }