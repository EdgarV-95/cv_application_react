export default function CustomInput({ text, placeholder, func }) {
  return (
    <input
      type="text"
      text={text}
      placeholder={placeholder}
      onChange={func}
    />
  );
}

// Createa a custom component for adding new experience and education.
// Can be the same with different value and assign this component to it as child.
