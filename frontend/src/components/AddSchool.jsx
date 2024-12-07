import React, {useState} from 'react'
const baseURL = import.meta.env.VITE_BASE_URL;


    const AddSchool = () => {
        const [formData, setFormData] = useState({
          name: "",
          address: "",
          latitude: "",
          longitude: "",
        });
        const [message, setMessage] = useState(null);
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await fetch(`${baseURL}/addSchool`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
              setMessage("School added successfully!");
              setFormData({ name: "", address: "", latitude: "", longitude: "" });
            } else {
              setMessage(data.error || "Error adding school.");
            }
          } catch (error) {
            setMessage("Network error. Please try again.");
          }
        };
      
        return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Add School</h2>
            {message && <p className="text-sm text-red-500 mb-4">{message}</p>}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="School Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input"
              />
              <input
                type="text"
                name="address"
                placeholder="School Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="input"
              />
              <input
                type="number"
                name="latitude"
                placeholder="Latitude"
                value={formData.latitude}
                onChange={handleChange}
                required
                className="input"
              />
              <input
                type="number"
                name="longitude"
                placeholder="Longitude"
                value={formData.longitude}
                onChange={handleChange}
                required
                className="input"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
              >
                Add School
              </button>
            </form>
          </div>
        );
      };
      


export default AddSchool
