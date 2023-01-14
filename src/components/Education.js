export default function Education({ education, onChange }) {
  return (
    <div className="education">
      <h4>Education</h4>
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="university"
        placeholder="University"
        value={education.university}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="eduCity"
        placeholder="City"
        value={education.eduCity}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="degree"
        placeholder="Degree"
        value={education.degree}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="uniYearFrom"
        placeholder="Year From"
        value={education.uniYearFrom}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="uniYearTo"
        placeholder="Year To"
        value={education.uniYearTo}
      />
    </div>
  );
}
