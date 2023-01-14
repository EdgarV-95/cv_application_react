export default function Experience({ experience, onChange, onAdd }) {
  return (
    <div className="experience">
      <h4>Experience</h4>
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="position"
        placeholder="position"
        value={experience.position}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="company"
        placeholder="company"
        value={experience.company}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="expCity"
        placeholder="City"
        value={experience.expCity}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="expYearFrom"
        placeholder="Year From"
        value={experience.expYearFrom}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="expYearTo"
        placeholder="Year To"
        value={experience.expYearTo}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
