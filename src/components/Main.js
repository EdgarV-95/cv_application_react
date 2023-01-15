import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';

export default function Main({
  cv,
  onChangePersonal,
  onChangeEducation,
  onChangeExperience,
  onAddExperience,
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
        />
        <Education
          education={cv.education}
          onChange={onChangeEducation}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
        >
          Test
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
            {/* <div className="experience-prev">
              <div className="experience-left">
                <div className="dates">
                  <p className="bold">
                    {cv.experience.expYearFrom} - {''}
                    {cv.experience.expYearTo}
                  </p>
                </div>
              </div>
              <div className="experience-right">
                <div className="details">
                  <p className="bold">{cv.experience.position}</p>
                  <p>
                    {cv.experience.company}, {cv.experience.expCity}
                  </p>
                </div>
              </div>
            </div> */}
            {cv.experience.map((test) => (
              <>
                <div className="experience-prev">
                  <div className="experience-left">
                    <div className="dates">
                      <p className="bold">
                        {test.expYearFrom} - {''}
                        {test.expYearTo}
                      </p>
                    </div>
                  </div>
                  <div className="experience-right">
                    <div className="details">
                      <p className="bold">{test.position}</p>
                      <p>
                        {test.company}, {test.expCity}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <h3>Education</h3>
            <div className="education-prev">
              <div className="education-left">
                <div className="dates">
                  <p className="bold">
                    {cv.education.uniYearFrom} - {''}
                    {cv.education.uniYearTo}
                  </p>
                </div>
              </div>
              <div className="education-right">
                <div className="details">
                  <p className="bold">
                    {cv.education.university}, {cv.education.uniCity}
                  </p>
                  <p>Degree: {cv.education.degree}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <img
              src="https://scontent-man2-1.xx.fbcdn.net/v/t31.18172-8/19388392_1365649726821443_1731989948078814899_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=TC-gmvUs22sAX-maW_o&_nc_ht=scontent-man2-1.xx&oh=00_AfDrIvg00MVQTJ72Ed-oGUeXaJrQY6b46xdZWboyxOLNhw&oe=63E56AB2"
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
