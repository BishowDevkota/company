import React, { useState } from 'react';
import '../style/ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  let service_id=process.env.REACT_APP_SERVICE_ID;
  let template_id=process.env.REACT_APP_TEMPELATE_ID;
  let user_id=process.env.REACT_APP_USER_ID;
  console.log(service_id,template_id,user_id)
  let Message="Thank You for your message. We will contact you soon.";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);

    emailjs.send(service_id, template_id, formData, user_id).then(
      (response) => {
        alert('Message Set Sucessfully We Will Contact You Soon', response.status, response.text);
      },
      (error) => {
        alert('FAILED... Please Try Again', error);
      },
    );
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div>
            {/* {submitted && <p>{Message}</p>} */}
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>

    </div>
  );
};

export default ContactForm;









// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     user_name: '',
//     user_email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_qofnrm6', 'template_6afcchf', e.target, 'YOUR_USER_ID')
//       .then((result) => {
//         console.log(result.text);
//         alert('Message sent successfully!');
//       }, (error) => {
//         console.log(error.text);
//         alert('Failed to send the message. Please try again later.');
//       });

//     setFormData({ user_name: '', user_email: '', message: '' });
//   };

//   return (
//     <form id="contact-form" onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         name="user_name"
//         value={formData.user_name}
//         onChange={handleChange}
//         required
//       />
//       <br />
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="user_email"
//         value={formData.user_email}
//         onChange={handleChange}
//         required
//       />
//       <br />
//       <label htmlFor="message">Message:</label>
//       <textarea
//         id="message"
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         required
//       />
//       <br />
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default ContactForm;

