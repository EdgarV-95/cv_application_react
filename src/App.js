import { useState } from 'react';
import './App.css';

function App() {
  // Personal Information
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [title, setTitle] = useState('');
  // const [photo, setPhoto] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [description, setDescription] = useState('');

  // Experience
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [addressFrom, setAddressFrom] = useState('');
  const [addressTo, setAddressTo] = useState('');

  // Education
  const [univeristy, setUniversity] = useState('');
  const [uniCity, setUniCity] = useState('');
  const [degree, setDegree] = useState('');
  const [subject, setSubject] = useState('');
  const [uniAddressFrom, setUniAddressFrom] = useState('');
  const [uniAddressTo, setUniAddressTo] = useState('');

  return (
    <div className="main">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(firstName);
          console.log(secondName);
          console.log(email);
          console.log(mobile);
        }}
      >
        {/* Personal Information */}
        <div className="personal-information">
          <h1>Personal Information</h1>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={secondName}
            placeholder="Last Name"
            onChange={(e) => setSecondName(e.target.value)}
          />
          <input
            type="text"
            value={title}
            placeholder="Title "
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* <input
            type="image"
            alt="profile-pic"
            value={photo}
            placeholder="Photo"
            onChange={(e) => setPhoto(e.target.value)}
          /> */}
          <input
            type="text"
            value={address}
            placeholder="Address "
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            value={mobile}
            placeholder="Phone Number"
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Experience */}
        <div className="experience">
          <h1>Experience</h1>
          <input
            type="text"
            value={position}
            placeholder="Position"
            onChange={(e) => setPosition(e.target.value)}
          />
          <input
            type="text"
            value={company}
            placeholder="Company"
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            value={city}
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            value={addressFrom}
            placeholder="From"
            onChange={(e) => setAddressFrom(e.target.value)}
          />
          <input
            type="text"
            value={addressTo}
            placeholder="To"
            onChange={(e) => setAddressTo(e.target.value)}
          />
        </div>

        {/* Education */}
        <div className="education">
          <h1>Education</h1>
          <input
            type="text"
            value={univeristy}
            placeholder="University"
            onChange={(e) => setUniversity(e.target.value)}
          />
          <input
            type="text"
            value={uniCity}
            placeholder="City"
            onChange={(e) => setUniCity(e.target.value)}
          />
          <input
            type="text"
            value={degree}
            placeholder="Degree"
            onChange={(e) => setDegree(e.target.value)}
          />
          <input
            type="text"
            value={subject}
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type="text"
            value={uniAddressFrom}
            placeholder="From"
            onChange={(e) => setUniAddressFrom(e.target.value)}
          />
          <input
            type="text"
            value={uniAddressTo}
            placeholder="To"
            onChange={(e) => setUniAddressTo(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button>Submit</button>
          <button>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default App;
