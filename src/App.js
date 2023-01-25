import './App.css';
import { v4 as uuidv4 } from 'uuid';
import JsPDF from 'jspdf';
import { useState } from 'react';
import emptyCV from './components/cv_data/emptyCV';
import demoCV from './components/cv_data/demoCV';
import Main from './components/Main';

export default function App() {
  const [cv, setCv] = useState(emptyCV);

  const handleChangePersonal = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      handleChangeImage(e);
      return;
    }

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeImage = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCv((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [name]: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
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

  let downloadFinished = false;
  const handleGeneratePDF = () => {
    // if (!downloadFinished) {
    //   document.querySelector('html').style.zoom = 0.55;
    // } else {
    //   document.querySelector('html').style.zoom = 1;
    // }
    const report = new JsPDF('p', 'pt', 'a4');
    report.html(document.querySelector('.preview')).then(() => {
      report.save('cv.pdf');
      downloadFinished = true;
    });
  };

  const handleResetCV = () => {
    setCv(emptyCV);
  };

  const handleDemoCV = () => {
    setCv(demoCV);
  };

  return (
    <>
      <Main
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onImageUpload={handleChangeImage}
        onChangeExperience={handleChangeExperience}
        onChangeEducation={handleChangeEducation}
        onAddExperience={handleAddExperience}
        onAddEducation={handleAddEducation}
        onRemoveExperience={handleRemoveExperience}
        onRemoveEducation={handleRemoveEducation}
        onPDFGen={handleGeneratePDF}
        onDemoCV={handleDemoCV}
        onResetCV={handleResetCV}
      />
    </>
  );
}
