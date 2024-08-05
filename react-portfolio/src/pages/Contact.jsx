import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleBlur = (field) => {
    if (!field) {
      setErrorMessage('This field is required');
    } else if (field === 'email' && !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('Please enter a valid email address');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur(name)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email')}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleBlur(message)}
          required
        ></textarea>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;