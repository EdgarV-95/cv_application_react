import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Preview from './components/Preview';
import { useState } from 'react';

export default function App() {
  // Personal Information
  const [firstName, setFirstName] = useState('Edgar');
  const [secondName, setSecondName] = useState('Veress');
  const [title, setTitle] = useState('Software Developer');
  const [city, setCity] = useState('Cambridge');
  const [email, setEmail] = useState('veress.edgar@gmail.com');
  const [mobile, setMobile] = useState('0123456789');
  const [description, setDescription] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.'
  );

  // Experience
  const [position, setPosition] = useState('Software Test Engineer');
  const [company, setCompany] = useState('Twitter');
  const [expCity, setExpCity] = useState('London');
  const [yearFrom, setYearFrom] = useState('2018');
  const [yearTo, setYearTo] = useState('2020');

  // Education
  const [university, setUniversity] = useState('UCB');
  const [uniCity, setUniCity] = useState('Birmingham');
  const [degree, setDegree] = useState('Marketing');
  const [uniYearFrom, setUniYearFrom] = useState('2014');
  const [uniYearTo, setUniYearTo] = useState('2017');

  return (
    <main>
      <div className="userInput">
        <h4>Personal Information</h4>
        <PersonalInfo
          firstName={firstName}
          setFirstName={setFirstName}
          secondName={secondName}
          setSecondName={setSecondName}
          title={title}
          setTitle={setTitle}
          city={city}
          setCity={setCity}
          email={email}
          setEmail={setEmail}
          mobile={mobile}
          setMobile={setMobile}
          description={description}
          setDescription={setDescription}
        />
        <h4>Experience</h4>
        <Experience
          position={position}
          setPosition={setPosition}
          company={company}
          setCompany={setCompany}
          expCity={expCity}
          setExpCity={setExpCity}
          yearFrom={yearFrom}
          setYearFrom={setYearFrom}
          yearTo={yearTo}
          setYearTo={setYearTo}
        />
        <h4>Education</h4>
        <Education
          univeristy={university}
          setUniversity={setUniversity}
          uniCity={uniCity}
          setUniCity={setUniCity}
          degree={degree}
          setDegree={setDegree}
          uniYearFrom={uniYearFrom}
          setUniYearFrom={setUniYearFrom}
          uniYearTo={uniYearTo}
          setUniYearTo={setUniYearTo}
        />
      </div>
      <Preview
        firstName={firstName}
        secondName={secondName}
        title={title}
        description={description}
        yearFrom={yearFrom}
        yearTo={yearTo}
        position={position}
        company={company}
        expCity={expCity}
        uniYearFrom={uniYearFrom}
        uniYearTo={uniYearTo}
        university={university}
        uniCity={uniCity}
        degree={degree}
        city={city}
        mobile={mobile}
        email={email}
      />
    </main>
  );
}
