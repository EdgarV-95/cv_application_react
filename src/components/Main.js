import PersonalInfo from './PersonalInfo';

export default function Main({ cv, onChangePersonal }) {
  return (
    <main>
      <div className="userInput">
        <h4>Personal Information</h4>
        <PersonalInfo
          personalInfo={cv.personalInfo}
          onChange={onChangePersonal}
        />
      </div>
    </main>
  );
}
