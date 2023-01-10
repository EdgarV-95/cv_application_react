export default function AddOrRemove() {
  return (
    <div className="btns">
      <button
        className="add-btn"
        onClick={() => console.log('faasz')}
      >
        Add
      </button>
      <button className="remove-btn">Delete</button>
    </div>
  );
}
