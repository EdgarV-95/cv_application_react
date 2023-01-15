export default function Experience({
  experience,
  onChange,
  onAdd,
  onRemove,
}) {
  let newExp = experience.map((exp) => (
    <div
      className={`exp -${Math.floor(Math.random() * 1000)}`}
      key={exp.id}
    >
      <input
        onChange={(e) => onChange(e, exp.id)}
        type="text"
        name="position"
        placeholder="Position"
        value={exp.position}
      />
      <input
        onChange={(e) => onChange(e, exp.id)}
        type="text"
        name="company"
        placeholder="Company"
        value={exp.company}
      />
      <input
        onChange={(e) => onChange(e, exp.id)}
        type="text"
        name="expCity"
        placeholder="City"
        value={exp.expCity}
      />
      <input
        onChange={(e) => onChange(e, exp.id)}
        type="text"
        name="expYearFrom"
        placeholder="Year From"
        value={exp.expYearFrom}
      />
      <input
        onChange={(e) => onChange(e, exp.id)}
        type="text"
        name="expYearTo"
        placeholder="Year To"
        value={exp.expYearTo}
      />
      <button onClick={() => onRemove(exp.id)}>Delete</button>
    </div>
  ));
  return (
    <div className="experience">
      <h4>Experience</h4>
      {newExp}
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
