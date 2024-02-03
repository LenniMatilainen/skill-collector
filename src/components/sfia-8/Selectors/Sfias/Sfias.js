import { useState } from "react"
import Skill from "./Skill";
import SkillData from "../../../skillData"
import Category from "./Category";

export default function Sfias(props) {
  const [category, setCategory] = useState("Select a skill category")
  const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory)
  }
  const handleClick = (infoedSkill) => {
    props.handleClick(infoedSkill)
  }
  
  const handleDoubleClick = (selectedSkill) => {
    props.handleDoubleClick(selectedSkill)
  }


  const numbersArray = Object.values(props.skillPool)
  .flatMap(obj => Object.values(obj))
  .filter(value => typeof value === "number");
  
  let skills = <div className="instruction">Select a skill category.</div>

  if (category !== "Select a skill category") {
    skills = SkillData
    .sort((a, b) => a.Skill.localeCompare(b.Skill)) // järjestää skillit aakkosjärjestykseen
    .map(item => {
      if (item.Category === category && !numbersArray.includes(item.Id)) {
        return (
          <Skill
            key={item.Id}
            id={item.Id}
            Code={item.Code}
            Skill={item.Skill}
            Category={item.Category}
            Subcategory={item.Subcategory}
            Color={item.Color}
            handleClick={handleClick}
            handleDoubleClick={handleDoubleClick}
            disable={props.disable}
            Selecting={props.Selecting}
          />
        );
      }
      return null    
    })
  }
  
    return (
      <div id="leftBox">
        <Category 
        Selected={handleCategory}
        />
        <section id="Sfia--leftBox">
            {skills}
        </section>
      </div>
    );
  }
  
