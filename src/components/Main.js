import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';

export default function Main({
  cv,
  onChangePersonal,
  onChangeEducation,
  onChangeExperience,
  onAddExperience,
  onAddEducation,
  onRemoveExperience,
  onRemoveEducation,
  onResetCV,
  onDemoCV,
}) {
  return (
    <main>
      <div className="userInput">
        <PersonalInfo
          personalInfo={cv.personalInfo}
          onChange={onChangePersonal}
        />
        <Experience
          experience={cv.experience}
          onChange={onChangeExperience}
          onAdd={onAddExperience}
          onRemove={onRemoveExperience}
        />
        <Education
          education={cv.education}
          onChange={onChangeEducation}
          onAdd={onAddEducation}
          onRemove={onRemoveEducation}
        />
        <br></br>
        <button
          onClick={(e) => {
            e.preventDefault();
            onDemoCV();
          }}
        >
          Demo CV
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onResetCV();
          }}
        >
          Reset CV
        </button>
      </div>
      <div className="preview">
        <div className="main-body">
          <div className="left-side">
            <div className="header">
              <h2>
                {cv.personalInfo.firstName}{' '}
                {cv.personalInfo.secondName}
              </h2>
              <h5>{cv.personalInfo.title}</h5>
            </div>
            <h3>Description</h3>
            <p>{cv.personalInfo.description}</p>
            <h3>Experience</h3>
            {cv.experience.map((test) => (
              <div className="experience-prev" key={test.id}>
                <div className="experience-left">
                  <div className="dates">
                    <p className="bold">
                      {test.expYearFrom} - {test.expYearTo}
                    </p>
                  </div>
                </div>
                <div className="experience-right">
                  <div className="details">
                    <p className="bold">{test.position},</p>
                    <p>
                      {test.company}, {test.expCity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <h3>Education</h3>
            {cv.education.map((test) => (
              <div className="education-prev" key={test.id}>
                <div className="education-left">
                  <div className="dates">
                    <p className="bold">
                      {test.uniYearFrom} - {test.uniYearTo}
                    </p>
                  </div>
                </div>
                <div className="education-right">
                  <div className="details">
                    <p className="bold">
                      {test.university}, {test.eduCity}
                    </p>
                    <p>{test.degree}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="right-side">
            <img
              src={cv.personalInfo.image}
              alt="avatar"
              height={'150vh'}
              width={'150vw'}
            />
            <h3>Personal Details</h3>
            <p className="bold">Location </p>
            <p>{cv.personalInfo.city}</p>
            <p className="bold">Phone Number </p>
            <p>{cv.personalInfo.mobile}</p>
            <p className="bold">E-mail </p>
            <p>{cv.personalInfo.email}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
