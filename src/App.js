import { useState } from 'react';
import './App.css';
import CustomInput from './components/CustomInput';

function App() {
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
  const [univeristy, setUniversity] = useState('UCB');
  const [uniCity, setUniCity] = useState('Birmingham');
  const [degree, setDegree] = useState('Marketing');
  const [uniyearFrom, setUniyearFrom] = useState('2014');
  const [uniyearTo, setUniyearTo] = useState('2017');

  return (
    <div className="main">
      <form type="submit">
        {/* Personal Information */}
        <div className="personal-information">
          <h4>Personal Information</h4>
          <CustomInput
            text={firstName}
            placeholder={'First Name'}
            func={(e) => setFirstName(e.target.value)}
          />
          <CustomInput
            text={secondName}
            placeholder="Last Name"
            func={(e) => setSecondName(e.target.value)}
          />
          <CustomInput
            text={title}
            placeholder="Title"
            func={(e) => setTitle(e.target.value)}
          />
          <CustomInput
            text={city}
            placeholder="City"
            func={(e) => setCity(e.target.value)}
          />
          <CustomInput
            text={email}
            placeholder="Email"
            func={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            text={mobile}
            placeholder="Phone Number"
            func={(e) => setMobile(e.target.value)}
          />
          <textarea
            maxLength={'300'}
            text={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Experience */}
        <div className="experience">
          <h4>Experience</h4>
          <CustomInput
            text={position}
            placeholder="Position"
            func={(e) => setPosition(e.target.value)}
          />
          <CustomInput
            text={company}
            placeholder="Company"
            func={(e) => setCompany(e.target.value)}
          />
          <CustomInput
            text={expCity}
            placeholder="City"
            func={(e) => setExpCity(e.target.value)}
          />
          <CustomInput
            text={yearFrom}
            placeholder="From"
            func={(e) => setYearFrom(e.target.value)}
          />
          <CustomInput
            text={yearTo}
            placeholder="To"
            func={(e) => setYearTo(e.target.value)}
          />
        </div>

        {/* Education */}
        <div className="education">
          <h4>Education</h4>
          <CustomInput
            text={univeristy}
            placeholder="University"
            func={(e) => setUniversity(e.target.value)}
          />
          <CustomInput
            text={uniCity}
            placeholder="City"
            func={(e) => setUniCity(e.target.value)}
          />
          <CustomInput
            text={degree}
            placeholder="Degree"
            func={(e) => setDegree(e.target.value)}
          />
          <CustomInput
            text={uniyearFrom}
            placeholder="From"
            func={(e) => setUniyearFrom(e.target.value)}
          />
          <CustomInput
            text={uniyearTo}
            placeholder="To"
            func={(e) => setUniyearTo(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(firstName);
            }}
          >
            Submit
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log('reset');
            }}
          >
            Reset
          </button>
        </div>
      </form>
      <div className="preview">
        <div className="header">
          <h2>
            {firstName} {secondName}
          </h2>
          <h5>{title}</h5>
        </div>
        <div className="main-body">
          <div className="left-side">
            <h3>Description</h3>
            <p>{description}</p>
            <div className="experience-prev">
              <h3>Experience</h3>
              <div className="experience-body">
                <div className="dates">
                  <p className="bold">
                    {yearFrom} - {yearTo}
                  </p>
                </div>
                <div className="details">
                  <p className="bold">{position}</p>
                  <p>
                    {company}, {expCity}
                  </p>
                </div>
              </div>
            </div>
            <div className="education-prev">
              <h3>Education</h3>
              <div className="education-body">
                <div className="dates">
                  <p className="bold">
                    {uniyearFrom} - {uniyearTo}
                  </p>
                </div>
                <div className="details">
                  <p className="bold">
                    {univeristy}, {uniCity}
                  </p>
                  <p>Degree: {degree}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <img
              src="https://thumbs.dreamstime.com/z/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-107388687.jpg"
              alt="avatar"
              height={'150vh'}
              width={'150vw'}
            />
            <h3>Personal Details</h3>
            <p className="bold">Address </p>
            <p>{city}</p>
            <p className="bold">Phone Number </p>
            <p>{mobile}</p>
            <p className="bold">E-mail </p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
