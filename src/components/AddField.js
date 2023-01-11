import { useState } from 'react';
import Experience from './Experience';

export default function AddField() {
  const [showCustomComponent, setShowCustomComponent] =
    useState(false);
  return (
    <>
      <button onClick={() => setShowCustomComponent(true)}>
        Add
      </button>
      {showCustomComponent && (
        <>
          <h1>{''}</h1>
          <Experience
            position={'position'}
            setPosition={'setPosition'}
            company={'company'}
            setCompany={'setCompany'}
            expCity={'expCity'}
            setExpCity={'setExpCity'}
            yearFrom={'yearFrom'}
            setYearFrom={'setYearFrom'}
            yearTo={'yearTo'}
            setYearTo={'setYearTo'}
          />
        </>
      )}
    </>
  );
}
