import { useState } from 'react';
import Navbar from '../Navbar';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    phoneNumber: '',
    role: 'student',
    profilePicture: null, // New state for profile picture
  });

  // Update form data when input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle profile picture change
  const handleProfileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0], // Set the selected file
    });
  };

  // Handle form submission (currently no backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add backend call logic here in the future
    console.log('Form data:', formData);
    alert('Form submitted!'); // Placeholder
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

          {/* Full Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              required
            >
              <option value="student">Student</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>

          {/* Profile Picture Upload */}
          <div className="mb-4">
            <label className="block text-gray-700">Profile Picture</label>
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={handleProfileChange} // Handle profile upload
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
