import Skill from "../../Sfias/Skill"
import skillData from "../../../../../skiller-sfia-8-data.json"
import { useState, useEffect } from "react"
import React from "react";


export default function Selected(props) {
    const [renderMostImportantSkills, setRenderMostImportantSkills] = useState([]);
    const [renderImportantSkills, setRenderImportantSkills] = useState([]);
    const [renderValuableSkills, setRenderValuableSkills] = useState([]);
    const [renderFutureSkills, setRenderFutureSkills] = useState([]);

    function getSelectedSkills(level) {
        const foundItems = []
        level.forEach(id => {
            const foundItem = skillData.find(item => item.Id === id);
            if (foundItem) {
              foundItems.push(foundItem);
            }
        });
        return foundItems
    }

    const [amount, setAmount] = useState({
        room: {
            mostImportant: null,
            important: null,
            valuable: null,
            future: null
        }
    }
    )
    const [selectedClass, setSelectedClass] = useState(null)
    
    useEffect(() => {
    if (props.selecting) {
        setSelectedClass("selecting--box");
    } else {
        setSelectedClass(null);
    }
    }, [props.selecting]);

    const handleClick = (id) => {
        props.handleClick(id)
    }

    const handleDoubleClick = (id) => {
        setTimeout(() => {
          props.RemoveSkill(id)
        }, 100);
    }

    // Renders Most Important Skills:
    useEffect(() => {
        const skills = getSelectedSkills(Object.values(props.skillPool.mostImportant)).map((item) => {
          return (
              <Skill
                key={item.Id}
                id={item.Id}
                Code={item.Code}
                Skill={item.Skill}
                Category={item.Category}
                Subcategory={item.Subcategory}
                Color={item.Color}
                handleDoubleClick={() => handleDoubleClick(item.Id)}
                handleClick={() => handleClick(item.Id)}
              />          
          );
        });
    
        setRenderMostImportantSkills(skills);
    
        const selectedSkillsCount = React.Children.count(skills);
    
        if (selectedSkillsCount < 5) {
          setAmount((prevAmount) => ({
            ...prevAmount,
            room: {
              ...prevAmount.room,
              mostImportant: true,
            },
          }));
        } else {
          setAmount((prevAmount) => ({
            ...prevAmount,
            room: {
              ...prevAmount.room,
              mostImportant: false,
            },
          }));
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.selecting, props.skillPool]);

    // Render Important skills:
    useEffect(() => {
        const skills = getSelectedSkills(Object.values(props.skillPool.important)).map((item) => {
          return (
            <Skill
              key={item.Id}
              id={item.Id}
              Code={item.Code}
              Skill={item.Skill}
              Category={item.Category}
              Subcategory={item.Subcategory}
              Color={item.Color}
              handleDoubleClick={() => handleDoubleClick(item.Id)}
              handleClick={() => handleClick(item.Id)}
            />
          );
        });
    
        setRenderImportantSkills(skills);
    
        const selectedSkillsCount = React.Children.count(skills);
    
        if (selectedSkillsCount < 5) {
          setAmount((prevAmount) => ({
            ...prevAmount,
            room: {
              ...prevAmount.room,
              important: true,
            },
          }));
        } else {
          setAmount((prevAmount) => ({
            ...prevAmount,
            room: {
              ...prevAmount.room,
              important: false,
            },
          }));
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.selecting, props.skillPool]);

      // Render Valuable skills:
    useEffect(() => {
        const skills = getSelectedSkills(Object.values(props.skillPool.valuable)).map((item) => {
          return (
            <Skill
              key={item.Id}
              id={item.Id}
              Code={item.Code}
              Skill={item.Skill}
              Category={item.Category}
              Subcategory={item.Subcategory}
              Color={item.Color}
              handleDoubleClick={() => handleDoubleClick(item.Id)}
              handleClick={() => handleClick(item.Id)}
            />
          );
        });
    
        setRenderValuableSkills(skills);
    
        const selectedSkillsCount = React.Children.count(skills);
    
        if (selectedSkillsCount < 5) {
          setAmount((prevAmount) => ({
            ...prevAmount,
            room: {
              ...prevAmount.room,
              valuable: true,
            },
          }));
        } else {
          setAmount((prevAmount) => ({
            ...prevAmount,
            room: {
              ...prevAmount.room,
              valuable: false,
            },
          }));
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.selecting, props.skillPool]);

    // Render Future skills:
    useEffect(() => {
        const skills = getSelectedSkills(Object.values(props.skillPool.future)).map((item) => {
          return (
            <Skill
              key={item.Id}
              id={item.Id}
              Code={item.Code}
              Skill={item.Skill}
              Category={item.Category}
              Subcategory={item.Subcategory}
              Color={item.Color}
              handleDoubleClick={() => handleDoubleClick(item.Id)}
              handleClick={() => handleClick(item.Id)}
            />
          );
        });
    
        setRenderFutureSkills(skills);
    
        const selectedSkillsCount = React.Children.count(skills);
    
        if (selectedSkillsCount < 5) {
          setAmount((prevAmount) => ({
            ...prevAmount,
            room: {
              ...prevAmount.room,
              future: true,
            },
          }));
        } else {
          setAmount((prevAmount) => ({
            ...prevAmount,
            room: {
              ...prevAmount.room,
              future: false,
            },
          }));
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.selecting, props.skillPool]);
    
    function getNextAvailableSkillId(poolKey) {
        const pool = props.skillPool[poolKey];
        for (let i = 1; i <= 5; i++) {
            const skillId = `skillId${i}`;
            if (pool[skillId] === null) {
                return skillId;
            }
        }
        return null;
        }
        
    function ghj(level) {
        if (props.selecting) {
            let index = getNextAvailableSkillId(level)
            setTimeout(() => {
              props.pushNewSkill(props.selected, index, level)
            }, 100);
            props.cancelSelecting()
        }
    }

    return (
        <>
            <h2 id="selected--instructions">Select at least one skill for each level (max. 5)</h2>
            <div id="selected--skillContainers">
                <div onClick={() => ghj("mostImportant")} id="mostImportant" className={`selected--skillContainer ${amount.room.mostImportant ? selectedClass : null}`}>
                    <h4>1. Most important</h4>
                    <div className="selected--skills">
                        {renderMostImportantSkills}
                    </div>
                </div>    
                <div onClick={() => ghj("important")} id="important" className={`selected--skillContainer ${amount.room.important ? selectedClass : null}`}>
                    <h4>2. Important</h4>
                    <div className="selected--skills">
                        {renderImportantSkills}
                    </div>
                </div>    
                <div onClick={() => ghj("valuable")} id="valuable" className={`selected--skillContainer ${amount.room.valuable ? selectedClass : null}`}>
                    <h4>3. Valuable</h4>
                    <div className="selected--skills">
                        {renderValuableSkills}
                    </div>
                </div>    
                <div onClick={() => ghj("future")} id="future" className={`selected--skillContainer ${amount.room.future ? selectedClass : null}`}>
                    <h4>4. Future</h4>
                    <div className="selected--skills">
                        {renderFutureSkills}
                    </div>
                </div>    
            </div>
        </>
        
    )
}