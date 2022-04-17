import { useEffect, useState } from 'react';
import Accordion from './Accordion';
import Button from './Button';
import Popup from './Popup';

function Box({sections}) {

  const [ currentSection, setCurrentSection ] = useState();

  const [ showAccordion, setShowAccordion ] = useState(false);
  const [ accordionBodyType, setaccordionBodyType ] = useState("");

  const [ showPopUp, setShowPopUp ] = useState(false);
  const [ popUpBodyType, setPopUpBodyType ] = useState("");

  const toggleAccordion = (content, type) => {
    setCurrentSection(content);
    setaccordionBodyType(type);
    setShowAccordion(!showAccordion);
  }

  const togglePopUp = (content, type) => {
    setCurrentSection(content);
    setPopUpBodyType(type);
    setShowPopUp(!showPopUp);
  }

  const onToggle = (e) => {
    setShowPopUp(!showPopUp);
  }

  return (
    <div className='box-container'>
        <div className="buttonContainer" style={buttonContainerStyle}>
          <Button object={sections.questions} text="Section 1" type="button" onClick={() => togglePopUp(sections, "form")} style={{marginBottom: '1rem'}}/>
          <Button object={sections.summary} text="Section 2" type="button" onClick={() => togglePopUp(sections, "summary")} />
        </div>

        {
          (currentSection && (
            <Popup key={currentSection.id} show={showPopUp} header={sections.title} body={{ content: currentSection, type: popUpBodyType }} onToggle={(e) => onToggle()}/>
          ))
        }

    </div>
  )
}

const buttonContainerStyle = {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "1rem"
}

export default Box