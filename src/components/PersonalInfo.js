export default function PersonalInfo({
  firstName,
  setFirstName,
  secondName,
  setSecondName,
  title,
  setTitle,
  city,
  setCity,
  email,
  setEmail,
  mobile,
  setMobile,
  description,
  setDescription,
}) {
  return (
    <div className="personal-information">
      <h4>Personal Information</h4>
      <input
        type="text"
        value={firstName}
        placeholder={'First Name'}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={secondName}
        placeholder={'Second Name'}
        onChange={(e) => setSecondName(e.target.value)}
      />
      <input
        type="text"
        value={title}
        placeholder={'Title'}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={city}
        placeholder={'City'}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder={'Email'}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={mobile}
        placeholder={'Mobile'}
        onChange={(e) => setMobile(e.target.value)}
      />
      <textarea
        type="text"
        value={description}
        placeholder={'Description'}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}
