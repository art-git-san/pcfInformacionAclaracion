import * as React from 'react'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import App from './App';

const options = {
  position: positions.TOP_CENTER,
  timeout: 4000,
  offset: '2rem',
  transition: transitions.SCALE
}

const AlertTemplate = ({ style, options: optionsAlert, message, close }: any) => {
  let classA = "alert";
  let emoji;
  if (optionsAlert.type === "info") {
    classA += " alert-info"
    emoji = <span>&#128209; </span>
  } else if (optionsAlert.type === "success") {
    classA += " alert-success"
    emoji = <span>&#9989; </span>
  } else {
    classA += " alert-error"
    emoji = <span>&#9940; </span>
  }

  return <div style={style} className={classA}>
    <div>
      {emoji}
      {message}
    </div>
    <button onClick={close}>&times;</button>
  </div>
}

const IndexComponent = (props: any) => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <App {...props}></App>
    </AlertProvider>
  );
}

export default IndexComponent;