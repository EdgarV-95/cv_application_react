export default function Education({
  education,
  onChange,
  onAdd,
  onRemove,
}) {
  let newEdu = education.map((edu) => (
    <div
      className={`edu-${Math.floor(Math.random() * 1000)}`}
      key={edu.id}
    >
      <input
        onChange={(e) => onChange(e, edu.id)}
        type="text"
        name="university"
        placeholder="University"
        value={edu.university}
      />
      <input
        onChange={(e) => onChange(e, edu.id)}
        type="text"
        name="eduCity"
        placeholder="City"
        value={edu.eduCity}
      />
      <input
        onChange={(e) => onChange(e, edu.id)}
        type="text"
        name="degree"
        placeholder="Degree"
        value={edu.degree}
      />
      <input
        onChange={(e) => onChange(e, edu.id)}
        type="text"
        name="uniYearFrom"
        placeholder="Year From"
        value={edu.uniYearFrom}
      />
      <input
        onChange={(e) => onChange(e, edu.id)}
        type="text"
        name="uniYearTo"
        placeholder="Year To"
        value={edu.uniYearTo}
      />
      <button onClick={onRemove}>Delete</button>
    </div>
  ));
  return (
    <div className="education">
      <h4>Education</h4>
      {newEdu}
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
