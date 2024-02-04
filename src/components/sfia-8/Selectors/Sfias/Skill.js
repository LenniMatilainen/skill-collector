import { useState, useEffect } from "react"

export default function Skill(props) {
    const [zIndex, setZIndex] = useState(0)
    const subCategoryColor = props.Color
    const style = {
        backgroundColor: subCategoryColor
    }
    const borderStyle = {
        outline: "4px solid " + subCategoryColor,
        zIndex: zIndex
    }

    function combineWords(words) {
        // split the input string into an array of two words
        let wordArray = words.split(" ");
        
        // extract the first three letters of each word
        let firstThreeLetters1 = wordArray[0].slice(0, 3);
        let firstThreeLetters2 = wordArray[1].slice(0, 3);
        
        // capitalize the first letter of each word
        let capitalized1 = wordArray[0].charAt(0).toUpperCase() + wordArray[0].slice(1);
        let capitalized2 = wordArray[1].charAt(0).toUpperCase() + wordArray[1].slice(1);
        
        // concatenate the capitalized words into a single string
        let combinedString = capitalized1.slice(0, 1) + firstThreeLetters1.slice(1) + capitalized2.slice(0, 1) + firstThreeLetters2.slice(1);
        
        // return the combined string
        return combinedString;
    }
    function LimitString() {
        const words = props.Skill.split(' ');
        const truncatedText = words.length > 2 ? words.slice(0, 2).join(' ') + '...' : props.Skill;
        return truncatedText;
      }
    useEffect(() => {
        if (!props.disable) {
            setZIndex(0);
        }
      }, [props.disable]);

    function DC() {
        if (!props.Selecting) {
            props.handleDoubleClick(props.id)
            setZIndex(11);
        }
    }

    function C() {
        if (!props.Selecting) {
            props.handleClick(props.id)
        }
    }
    return (
        <div onDoubleClick={DC} onClick={C} className="sfia" style={borderStyle}>
            <div className="sub" style={style}>
                <p>{combineWords(props.Subcategory)}</p>
            </div>
            <div className="skillName">
                {LimitString()}
            </div>
        </div>
    );
  }