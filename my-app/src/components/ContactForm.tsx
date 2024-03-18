// ContactForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission (send email or perform API call)
    console.log(formData);
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
      </div>
      <div>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
      </div>
      <div>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      </div>
      <div>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={4} required />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
