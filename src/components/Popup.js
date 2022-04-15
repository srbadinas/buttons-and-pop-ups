function Popup({show, content, onToggle}) {
  return (
    <div className="pop-up" style={{...popupStyle, display: (show ? 'block' : 'none') }}>
        <div className="pop-up-dialog" style={popupDialogStyle}>
            <div className="pop-up-content" style={{height: '100%'}}>
                <div className="pop-up-header" style={popUpHeaderStyle}>
                    <h3>{content.title}</h3>
                    <h3 style={closeButtonStyle} onClick={() => onToggle(content)}>x</h3>
                </div>
                <div className="pop-up-body" style={popUpBodyStyle}>
                    {content.body}
                </div>
                <div className="pop-up-footer">
                </div>
            </div>
        </div>
    </div>
  )
}

const popupStyle = {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    background: 'rgba(000, 000, 000, .3)',
}

const popupDialogStyle = {
    width: '600px',
    height: '400px',
    margin: '5rem auto',
    borderRadius: '3px',
    background: '#fff'
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