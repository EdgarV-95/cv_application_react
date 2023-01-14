export default function PersonalInfo({ personalInfo, onChange }) {
  return (
    <div className="personal-information">
      <h4>Personal Information</h4>
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="firstName"
        placeholder="First name"
        value={personalInfo.firstName}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="secondName"
        placeholder="Second name"
        value={personalInfo.secondName}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="title"
        placeholder="Title"
        value={personalInfo.title}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="city"
        placeholder="City"
        value={personalInfo.city}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="mobile"
        placeholder="Mobile"
        value={personalInfo.mobile}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="description"
        placeholder="Description"
        value={personalInfo.description}
      />
    </div>
  );
}
