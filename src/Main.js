import "./main.css"
import Navbar from "./components/sfia-8/Nav";
import Selectors from "./components/sfia-8/Selectors/Selectors"
import { useState } from "react";

function Main() {
  const [skillPool, updateSkillPool] = useState({
    mostImportant: {
      skillId1: null,
      skillId2: null,
      skillId3: null,
      skillId4: null,
      skillId5: null,
    },
    important: {
      skillId1: null,
      skillId2: null,
      skillId3: null,
      skillId4: null,
      skillId5: null,
    },
    valuable: {
      skillId1: null,
      skillId2: null,
      skillId3: null,
      skillId4: null,
      skillId5: null,
    },
    future: {
      skillId1: null,
      skillId2: null,
      skillId3: null,
      skillId4: null,
      skillId5: null,
    }
})

const pushNewSkill = (id, index, level) => {
  updateSkillPool(prevSkillPool => ({
    ...prevSkillPool,
    [level]: {
      ...prevSkillPool[level],
      [index]: id
    }
  }))
}

function removeSkill(id) {
  // loop through each section of skillPool
  Object.keys(skillPool).forEach((section) => {
    // loop through each skill in the section
    Object.keys(skillPool[section]).forEach((skill) => {
      // if the skill has the given id, replace the value with null
      if (skillPool[section][skill] === id) {
        updateSkillPool((prevState) => ({
          ...prevState,
          [section]: {
            ...prevState[section],
            [skill]: null,
          },
        }));
      }
    });
  });
}
  return (
    <>
      <Navbar />
      <Selectors
      pushNewSkill={pushNewSkill}
      RemoveSkill={removeSkill}
      skillPool={skillPool}
      />
    </>
  );
}

export default Main;
