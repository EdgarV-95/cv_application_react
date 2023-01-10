export default function DetailField({ field, children }) {
  let substring = field.split(' ');
  const theme = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3vh',
  };
  if (field.includes(' ')) {
    let classTitle = `${substring[0].toLowerCase()}-${substring[1].toLowerCase()}`;
    return (
      <div className={classTitle} style={theme}>
        <h4>{`${field}`}</h4>
        {children.map((child) => child)}
      </div>
    );
  } else {
    return (
      <div className={field.toLowerCase()} style={theme}>
        <h4>{`${field}`}</h4>
        {children.map((child) => child)}
      </div>
    );
  }
}
