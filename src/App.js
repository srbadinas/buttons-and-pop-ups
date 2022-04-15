import { useState } from 'react';
import './App.css';

import Popup from './components/Popup';
import Form from './components/Form';
import Box from './components/Box';

function App() {

  const [ formValues, setFormValues ] = useState({});

  const formContent = [
    {
      id: '1',
      type: 'text',
      name: 'Question 1',
    },
    {
      id: '2',
      element: 'input',
      type: 'text',
      name: 'Question 2',
    },
    {
      id: '3',
      type: 'text',
      name: 'Question 3',
    },
  ];

  const submitForm = (e, inputFields) => {
    e.preventDefault();
    setFormValues(inputFields);
    console.log(inputFields);
  }

  // Copy and paste this to have another set of section buttons, just make sure to change the variable name
  const sections = [
    {
      id: 0,
      title: 'Section 1',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      show: false,
    },
    {
      id: 1,
      title: 'Section 2',
      body: <Form formContent={formContent} onSubmit={submitForm}/>,
      show: false,
    },
  ];

  const [ currentSection, setCurrentSection ] = useState(sections[0]);
  const [ showPopUp, setshowPopUp ] = useState(false);

  const showSection = (obj) => {
    setshowPopUp(!showPopUp);
    setCurrentSection(obj);
  }

  return (
    <div className="App" style={appContainerStyle}>

      <Box sections={sections} showSection={showSection}/>
      <Box sections={sections} showSection={showSection}/>
      <Box sections={sections} showSection={showSection}/>
      <Box sections={sections} showSection={showSection}/>

      <Popup show={showPopUp} content={currentSection} onToggle={showSection}/>
    </div>
  );
}

const appContainerStyle = {
  margin: "2rem auto",
  padding: "5rem",
  display: "flex",
  justifyContent: "space-around"
}

export default App;
