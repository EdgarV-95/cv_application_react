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
