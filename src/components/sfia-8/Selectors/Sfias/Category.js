// useState
import { useState } from 'react';
// Font Awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Font Awesome icons:
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'



export default function Category(props) {
    const handleClick = (event) => {
        const itemHTML = event.target.innerHTML;
        const chosen = document.getElementById("category--chosen")
        chosen.innerHTML = itemHTML
        props.Selected(itemHTML)
        setIsVisible(!isVisible);
    }

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
    return (
        <div className="category">
            <div className="category--selector" onClick={toggleVisibility}>
                <p id="category--chosen">Select a skill category</p>
                <FontAwesomeIcon className="arrow" icon={faAngleDown} />
            </div>
            {isVisible && <ul id="category--list">
                <li onClick={handleClick}>Change and transformation</li>
                <li onClick={handleClick}>Delivery and operation</li>
                <li onClick={handleClick}>Development and implementation</li>
                <li onClick={handleClick}>People and skills</li>
                <li onClick={handleClick}>Relationships and engagement</li>
                <li onClick={handleClick}>Strategy and architecture</li>
            </ul>}
        </div>
    );
  }
  