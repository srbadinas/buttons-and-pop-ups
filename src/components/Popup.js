import Form from "./Form"

function Popup({show, header, body, onToggle}) {
    console.log(body.type)
  return (
    <div className="pop-up" style={{ display: (show ? 'block' : 'none') }}>
        <div className="pop-up-dialog">
            <div className="pop-up-content" style={{height: '100%'}}>
                <div className="pop-up-header" style={popUpHeaderStyle}>
                    <h3>{header}</h3>
                    <h3 style={closeButtonStyle} onClick={() => onToggle()}>x</h3>
                </div>
                <div className="pop-up-body" style={popUpBodyStyle}>
                    {
                        (body.type === "form" ? <Form formContent={ body.content.questions }/> : (body.content.summary))
                    }
                </div>
                <div className="pop-up-footer">
                </div>
            </div>
        </div>
    </div>
  )
}

const popUpHeaderStyle = { 
    display: 'flex', 
    borderTopLeftRadius: '3px', 
    borderTopRightRadius: '3px',
    padding: '0rem 1.5rem',
    borderBottom: '1px solid #dee2e6'
}

const closeButtonStyle = {
    marginLeft: 'auto',
    lineHeight: '18px',
    color: '#aaa',
    cursor: 'pointer',
    '& :hover': {
        color: 'red'
    }
}

const popUpBodyStyle = {
    padding: "3rem"
}

export default Popup