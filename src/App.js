import { useState } from 'react';
import './App.css';

import Popup from './components/Popup';
import Form from './components/Form';
import Box from './components/Box';

function App() {

  // The formValues variable is the storage of the submitted form
  const [ formValues, setFormValues ] = useState({});

  /**
   * List of Questions, you can get the list of questions from the Database and store it in this variable
   * Make sure that you populate the id, type, name, from the Database
   */
  const formContent = [
    {
      id: '1',
      type: 'text',
      name: 'Question 1',
      correctAnswer: 'red',
      isCorrect: false,
    },
    {
      id: '2',
      type: 'text',
      name: 'Question 2',
      correctAnswer: 'blue',
      isCorrect: false,
    },
    {
      id: '3',
      type: 'text',
      name: 'Question 3',
      correctAnswer: 'yellow',
      isCorrect: false,
    },
    {
      id: '4',
      type: 'text',
      name: 'Question 4',
      correctAnswer: 'pink',
      isCorrect: false,
    },
    {
      id: '5',
      type: 'text',
      name: 'Question 5',
      correctAnswer: 'green',
      isCorrect: false,
    },
  ];  

  // Function that executes when the user submits the form
  const submitForm = (e, inputFields) => {

    // Prevents the load of the window.
    e.preventDefault();

    // setting the formValues variable
    setFormValues(inputFields);
    console.log(inputFields);
  }

  /**
   * This variable is the content of the pop-up window.
   * You may change the title, and the body property.
   * Always set the show property to false as it is the indicator that the current section is the one that is displaying in the pop-up.
   * You can duplicate this variable as long as you change the duplicate one into a different variable name.
   */
  const sections = [
    {
      id: 0,
      title: 'Section 1',
      body: <Form formContent={formContent} onSubmit={submitForm}/>,
      show: false,
    },
    {
      id: 1,
      title: 'Section 2',
      body: <Form formContent={formContent} onSubmit={submitForm}/>,
      show: false,
    },
  ];

  const sections2 = [
    {
      id: 0,
      title: 'Section 3',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      show: false,
    },
    {
      id: 1,
      title: 'Section 4',
      body: <Form formContent={formContent} onSubmit={submitForm}/>,
      show: false,
    },
  ];

  // Indicates what section is currently displaying in the pop-up
  const [ currentSection, setCurrentSection ] = useState(sections[0]);

  // Toggle pop-up window
  const [ showPopUp, setshowPopUp ] = useState(false);

  /**
   * Function that displays the pop-up window and display the current section in the pop-up body
   * This function will execute when the button was clicked.
   */
  const showSection = (obj) => {
    setshowPopUp(!showPopUp);
    setCurrentSection(obj);
  }

  return (
    <div className="App" style={appContainerStyle}>

      <Box sections={sections} showSection={showSection}/>
      <Box sections={sections2} showSection={showSection}/>
      <Box sections={sections2} showSection={showSection}/>

      <Popup show={showPopUp} content={currentSection} onToggle={showSection}/>
    </div>
  );
}

const appContainerStyle = {
  margin: "2rem auto",
  padding: "5rem",
  display: "flex",
  flexWrap: "wrap",
}

export default App;
