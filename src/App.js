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
  const modules = [
    {
      id: 0,
      title: 'Section 1',
      questions: [
        {
          id: 0,
          statement: "Question 1",
          answer: "1"
        },
        {
          id: 1,
          statement: "Question 2",
          answer: "2"
        },
        {
          id: 2,
          statement: "Question 3", 
          answer: "3"
        },
        {
          id: 3,
          statement: "Question 4", 
          answer: "4"
        },
        {
          id: 4,
          statement: "Question 4", 
          answer: "4"
        },
        {
          id: 5,
          statement: "Question 5", 
          answer: "5"
        },
        {
          id: 6,
          statement: "Question 6", 
          answer: "6"
        },
        {
          id: 7,
          statement: "Question 7", 
          answer: "7"
        },
        {
          id: 8,
          statement: "Question 8", 
          answer: "8"
        },
        {
          id: 9,
          statement: "Question 9", 
          answer: "9"
        },
      ],
      summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    },
    {
      id: 1,
      title: 'Section 2',
      questions: [
        {
          id: 0,
          statement: "Question 4",
          answer: "4"
        },
        {
          id: 1,
          statement: "Question 5",
          answer: "5"
        },
        {
          id: 2,
          statement: "Question 6", 
          answer: "6"
        },
      ],
      summary: "This is Section 2",
    },
    {
      id: 3,
      title: 'Section 2',
      questions: [
        {
          id: 0,
          statement: "Question 4",
          answer: "4"
        },
        {
          id: 1,
          statement: "Question 5",
          answer: "5"
        },
        {
          id: 2,
          statement: "Question 6", 
          answer: "6"
        },
      ],
      summary: "This is Section 2",
    },
    {
      id: 4,
      title: 'Section 2',
      questions: [
        {
          id: 0,
          statement: "Question 4",
          answer: "4"
        },
        {
          id: 1,
          statement: "Question 5",
          answer: "5"
        },
        {
          id: 2,
          statement: "Question 6", 
          answer: "6"
        },
      ],
      summary: "This is Section 2",
    },
  ];

  // Indicates what section is currently displaying in the pop-up
  const [ currentSection, setCurrentSection ] = useState(modules[0]);

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
      { modules.map(sections => {
        return (
          <Box key={sections.id} sections={sections}/>
        )
      }) }
      
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
