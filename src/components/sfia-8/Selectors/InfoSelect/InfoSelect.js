import { useState, useEffect } from "react";
import Info from "./Tabs/Info";
import Selected from "./Tabs/Selected";

export default function InfoSelect(props) {
  // Määritetään tilakoukku 'tab' ja alustetaan se arvolla null
  const [tab, setTab] = useState(null);
  // Määritetään tilakoukku 'chooseTab' ja alustetaan se arvolla null
  const [chooseTab, setChooseTab] = useState(null);

  // Vaikutuskoukku, joka muuttaa 'tab'-tilaa propsin 'info'-muutoksen mukaan
  useEffect(() => {
    if (!props.info) {
      setTab(true);
    }
  }, [props.info]);

  useEffect(() => {
      if (props.selecting) {
        setTab(!props.selected);
      }
  }, [props.selecting, props.selected]);

  // Vaikutuskoukku, joka muodostaa välilehden sisällön sen valinnan perusteella, joka on tallennettu 'tab'-tilassa
  useEffect(() => {
    const tabContent = tab ?
        <Info clicked={props.info} />
        :
        <Selected
        cancelSelecting={props.cancelSelecting}
        selected={props.selected}
        pushNewSkill={props.pushNewSkill}
        RemoveSkill={props.RemoveSkill}
        handleClick={props.handleClick}
        skillPool={props.skillPool}
        selecting={props.selecting}
        />;

    setChooseTab(tabContent);
  }, [tab, props.info, props.selecting, props.skillPool, props.selected, props.nextSlot, props.cancelSelecting, props.pushNewSkill, props.handleClick, props.RemoveSkill]);

  // Funktio, joka vaihtaa 'tab'-tilaa käyttäjän klikkauksen perusteella
  function handleClick() {
    setTab(prevTab => !prevTab);
  }

  // Määritetään valitun välilehden tyyli
  const selectedClass = tab ? "tab selected" : "tab";
  // Määritetään valitsemattoman välilehden tyyli
  const infoClass = tab ? "tab" : "tab selected";

  const InfoScreen = tab ?
    <div className={infoClass}>
      <p>Info</p>
    </div>
    :
    <div className={infoClass} onClick={handleClick}>
      <p>Info</p>
    </div>

  const SelectedScreen = tab ? 
    <div className={selectedClass} onClick={handleClick}>
      <p>Selected</p>
    </div>
    :
    <div className={selectedClass}>
      <p>Selected</p>
    </div>

  const Selecting = (props.selecting && (props.selected !== false)) ? <div onClick={props.cancelSelecting} className="selecting"></div> : null

  // Renderöidään komponentti
  return (
    <div id="infoSelect">
      <div id="infoTabs">
        {InfoScreen}
        {SelectedScreen}
      </div>
      <section id="Sfia--rightBox">
        {Selecting}
        {chooseTab}
      </section>
    </div>
  );
}