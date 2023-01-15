export default function Experience({ experience, onChange, onAdd }) {
  let newExp = experience.map((exp) => (
    <div className="test" key={exp.id}>
      <h4>Experience</h4>
      <input
        key={exp.id}
        id={exp.id}
        onChange={(e) => onChange(e, exp.id)}
        type="text"
        name="position"
        placeholder="position"
        value={exp.position}
      />
      <input
        key={exp.id}
        id={exp.id}
        onChange={(e) => onChange(e, exp.id)}
        type="text"
        name="company"
        placeholder="company"
        value={exp.company}
      />
      <input
        key={exp.id}
        id={exp.id}
        onChange={(e) => onChange(e, exp.id)}
        type="text"
        name="expCity"
        placeholder="City"
        value={experience.expCity}
      />
      <input
        key={exp.id}
        id={exp.id}
        onChange={(e) => onChange(e, exp.id)}
        type="text"
        name="expYearFrom"
        placeholder="Year From"
        value={experience.expYearFrom}
      />
      <input
        key={exp.id}
        id={exp.id}
        onChange={(e) => onChange(e, exp.id)}
        type="text"
        name="expYearTo"
        placeholder="Year To"
        value={experience.expYearTo}
      />
    </div>
  ));
  return (
    <div className="experience">
      {newExp}
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
