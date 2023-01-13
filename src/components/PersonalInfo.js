export default function PersonalInfo({ personalInfo, onChange }) {
  return (
    <div className="personal-information">
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="firstName"
        placeholder="First name"
        value={personalInfo.firstName}
      />
    </div>
  );
}
