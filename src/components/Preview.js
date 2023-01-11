export default function Preview({
  firstName,
  secondName,
  title,
  description,
  yearFrom,
  yearTo,
  position,
  company,
  expCity,
  uniYearFrom,
  uniYearTo,
  university,
  uniCity,
  degree,
  city,
  mobile,
  email,
}) {
  return (
    <div className="preview">
      <div className="main-body">
        <div className="left-side">
          <div className="header">
            <h2>
              {firstName} {secondName}
            </h2>
            <h5>{title}</h5>
          </div>
          <h3>Description</h3>
          <p>{description}</p>
          <h3>Experience</h3>
          <div className="experience-prev">
            <div className="experience-left">
              <div className="dates">
                <p className="bold">
                  {yearFrom} - {yearTo}
                </p>
              </div>
            </div>
            <div className="experience-right">
              <div className="details">
                <p className="bold">{position}</p>
                <p>
                  {company}, {expCity}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="experience-prev">
            <div className="experience-left">
              <div className="dates">
                <p className="bold">
                  {yearFrom} - {yearTo}
                </p>
              </div>
            </div>
            <div className="experience-right">
              <div className="details">
                <p className="bold">{position}</p>
                <p>
                  {company}, {expCity}
                </p>
              </div>
            </div>
          </div> */}
          <h3>Education</h3>
          <div className="education-prev">
            <div className="education-left">
              <div className="dates">
                <p className="bold">
                  {uniYearFrom} - {uniYearTo}
                </p>
              </div>
            </div>
            <div className="education-right">
              <div className="details">
                <p className="bold">
                  {university}, {uniCity}
                </p>
                <p>Degree: {degree}</p>
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
          <p>{city}</p>
          <p className="bold">Phone Number </p>
          <p>{mobile}</p>
          <p className="bold">E-mail </p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
