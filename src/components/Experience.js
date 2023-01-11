export default function Experience({
  position,
  setPosition,
  company,
  setCompany,
  expCity,
  setExpCity,
  yearFrom,
  setYearFrom,
  yearTo,
  setYearTo,
}) {
  return (
    <div className="experience">
      <input
        type="text"
        value={position}
        placeholder={'Position'}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        type="text"
        value={company}
        placeholder={'Company'}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        value={expCity}
        placeholder={'Location'}
        onChange={(e) => setExpCity(e.target.value)}
      />
      <input
        type="text"
        value={yearFrom}
        placeholder={'Year From'}
        onChange={(e) => setYearFrom(e.target.value)}
      />
      <input
        type="text"
        value={yearTo}
        placeholder={'Year To'}
        onChange={(e) => setYearTo(e.target.value)}
      />
    </div>
  );
}
