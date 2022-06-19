import React from 'react';

export default function App() {
  const [formData, setFormData] = React.useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      isSubscribed: true,
      employmentStatus: '',
      password: '',
      confirmPassword: '',
    },
  );

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
        <fieldset>
          <h5 className="legend">Current employment status</h5>
          <div>
            <input
              type="radio"
              id="unemployed"
              name="employmentStatus"
              value="unemployed"
              checked={formData.employmentStatus === 'unemployed'}
              onChange={handleChange}
            />
            <label htmlFor="unemployed">Unemployed</label>
          </div>
          <div>
            <input
              type="radio"
              id="part-time"
              name="employmentStatus"
              value="part-time"
              checked={formData.employmentStatus === 'part-time'}
              onChange={handleChange}
            />
            <label htmlFor="part-time">Part-time</label>
          </div>
          <div>
            <input
              type="radio"
              id="full-time"
              name="employmentStatus"
              value="full-time"
              checked={formData.employmentStatus === 'full-time'}
              onChange={handleChange}
            />
            <label htmlFor="full-time">Full-time</label>
          </div>
        </fieldset>
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
