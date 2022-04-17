import { useEffect, useState } from "react"
import Form from "./Form"

function Accordion({ header, body, show }) {

  return (
    <div className="accordion-container" style={{...accordionContainerStyle, display: (show ? "block" : "none")}}>
        <div className="accordion-header" style={accordionHeaderStyle}>{header}</div>
        <div className="accordion-body">
          {
            (body.type === "form" ? <Form formContent={ body.content.questions }/> : (body.content.summary))
          }
            
        </div>
    </div>
  )
}

const accordionContainerStyle = {
    padding: '1rem',
    backgroundColor: '#ddd',
    width: '75%',
    height: 'fit-content'
}

const accordionHeaderStyle = {
    marginBottom: '.5rem',
    fontSize: '1.2rem'
}

export default Accordion