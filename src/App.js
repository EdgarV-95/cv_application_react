import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
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
  experience: [
    {
      id: uuidv4(),
      position: 'Web Developer',
      company: 'Verint',
      expCity: 'Cambridge',
      expYearFrom: '2018',
      expYearTo: '2023',
    },
  ],
  education: [
    {
      id: uuidv4(),
      university: 'University of Birmingham',
      eduCity: 'Birmingham',
      degree: 'Marketing & Management',
      uniYearFrom: '2014',
      uniYearTo: '2017',
    },
  ],
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

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setCv((prevState) => {
      const newExperience = prevState.experience.map(
        (experienceItem) => {
          if (experienceItem.id === id) {
            return { ...experienceItem, [name]: value };
          }
          return experienceItem;
        }
      );
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        },
      ],
    }));
  };

  const handleRemoveExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setCv((prevState) => {
      const newEducation = prevState.education.map(
        (educationItem) => {
          if (educationItem.id === id) {
            return { ...educationItem, [name]: value };
          }
          return educationItem;
        }
      );
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleAddEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        },
      ],
    }));
  };

  const handleRemoveEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...newEducation] };
    });
  };

  return (
    <>
      <Main
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onChangeEducation={handleChangeEducation}
        onAddExperience={handleAddExperience}
        onAddEducation={handleAddEducation}
        onRemoveExperience={handleRemoveExperience}
        onRemoveEducation={handleRemoveEducation}
      />
    </>
  );
}
