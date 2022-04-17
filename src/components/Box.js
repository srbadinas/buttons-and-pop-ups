import { useEffect, useState } from 'react';
import Accordion from './Accordion';
import Button from './Button';

function Box({sections}) {

  const [ currentSection, setCurrentSection ] = useState();

  const [ showAccordion, setShowAccordion ] = useState(false);

  const toggleAccordion = (section) => {
    setCurrentSection(section);
    setShowAccordion(true);
  }

  return (
    <div className='container' style={containerStyle}>
        {
          (currentSection && (
           <Accordion key={currentSection.id} header={currentSection.title} body={{questions: currentSection.questions, summary: currentSection.summary}} show={showAccordion}/>
          ))
        }
        <div className="buttonContainer" style={buttonContainerStyle}>
            { sections.map((section, i) => {
            return (<Button key={section.id} object={section} text={section.title} type="button" onClick={() => toggleAccordion(section)} style={{ marginBottom: ( (sections.length - 1) !== i && '1rem') }}/>)
            }) }
        </div>
    </div>
  )
}

const containerStyle = {
    display: "flex",
    border: "1px dashed #000",
    width: "45%",
    height: "350px",
    marginRight: '1rem',
    marginBottom: '1rem'
}

const buttonContainerStyle = {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "1rem"
}

export default Box