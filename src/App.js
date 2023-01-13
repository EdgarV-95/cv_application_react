import { useState } from 'react';
import './App.css';
import Main from './components/Main';

export default function App() {
  const [cv, setCv] = useState(emptyCV);
  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  return <Main cv={cv} onChangePersonal={handleChangePersonal} />;
}
