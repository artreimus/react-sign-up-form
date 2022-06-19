import React from 'react';

export default function App() {
  const [formData, setFormData] = React.useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      isSubscribed: true,
      password: '',
      confirmPassword: '',
    },
  );

  console.log(formData);

  function handleChange(event) {
    const {
      name, value, type, checked,
    } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      alert('Successfully signed up');
    } else {
      alert('Password mismatch');
      return;
    }

    if (formData.isSubscribed) {
      alert('Thank you for signing up to your newsletter!');
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          className="form--input"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="form--input"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
          required

        />
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
          required
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="isSubscribed"
            onChange={handleChange}
            checked={formData.isSubscribed}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
