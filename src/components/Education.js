export default function Education({
  univeristy,
  setUniversity,
  uniCity,
  setUniCity,
  degree,
  setDegree,
  uniYearFrom,
  setUniYearFrom,
  uniYearTo,
  setUniYearTo,
}) {
  return (
    <div className="education">
      <input
        type="text"
        value={univeristy}
        placeholder={'University name'}
        onChange={(e) => setUniversity(e.target.value)}
      />
      <input
        type="text"
        value={uniCity}
        placeholder={'Location'}
        onChange={(e) => setUniCity(e.target.value)}
      />
      <input
        type="text"
        value={degree}
        placeholder={'Degree'}
        onChange={(e) => setDegree(e.target.value)}
      />
      <input
        type="text"
        value={uniYearFrom}
        placeholder={'Year From'}
        onChange={(e) => setUniYearFrom(e.target.value)}
      />
      <input
        type="text"
        value={uniYearTo}
        placeholder={'Year To'}
        onChange={(e) => setUniYearTo(e.target.value)}
      />
    </div>
  );
}
