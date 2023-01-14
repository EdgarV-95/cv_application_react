import { useState } from 'react';
import './App.css';
import Main from './components/Main';

const emptyCV = {
  personalInfo: {
    firstName: 'Edgar',
    secondName: 'Veress',
    title: 'Web Developer',
    city: 'Cambridge',
    email: 'veress.edgar@gmail.com',
    mobile: '07729046204',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum id enim vel blandit. Ut dapibus nec risus quis bibendum. Pellentesque vel interdum dui, et imperdiet mi.',
  },
  experience: {
    position: 'Web Dev',
    company: 'Verint',
    expCity: 'Cambridge',
    expYearFrom: '2018',
    expYearTo: '2023',
  },
  education: {
    university: 'University of Birmingham',
    eduCity: 'Birmingham',
    degree: 'Marketing & Management',
    uniYearFrom: '2014',
    uniYearTo: '2017',
  },
};

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

  const handleChangeExperience = (e) => {
    const { name, value } = e.target;
    setCv((prevState) => ({
      ...prevState,
      experience: {
        ...prevState.experience,
        [name]: value,
      },
    }));
  };

  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: '1',
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        },
      ],
    }));
  };

  const handleChangeEducation = (e) => {
    const { name, value } = e.target;
    setCv((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        [name]: value,
      },
    }));
  };

  return (
    <>
      <Main
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onChangeEducation={handleChangeEducation}
        onAddExperience={handleAddExperience}
      />
    </>
  );
}
