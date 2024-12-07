import React, {useState} from 'react'
const baseURL = process.env.VITE_API_URL;

    const ListSchool = () => {
        const [schools, setSchools] = useState([]);
        const [location, setLocation] = useState({ latitude: "", longitude: "" });
        const [error, setError] = useState(null);
      
        const fetchSchools = async () => {
          try {
            const response = await fetch(
              `${baseURL}/listSchools?latitude=${location.latitude}&longitude=${location.longitude}`
            );
            const data = await response.json();
            if (response.ok) {
              setSchools(data);
            } else {
              setError(data.error || "Error fetching schools.");
            }
          } catch (err) {
            setError("Network error. Please try again.");
          }
        };
      
        const handleChange = (e) => {
          setLocation({ ...location, [e.target.name]: e.target.value });
        };
      
        return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">List Schools</h2>
            {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
              <input
                type="number"
                name="latitude"
                placeholder="Your Latitude"
                value={location.latitude}
                onChange={handleChange}
                required
                className="input"
              />
              <input
                type="number"
                name="longitude"
                placeholder="Your Longitude"
                value={location.longitude}
                onChange={handleChange}
                required
                className="input"
              />
              <button
                onClick={fetchSchools}
                className="w-full py-2 px-4 bg-green-500 text-white rounded shadow hover:bg-green-600"
              >
                Find Schools
              </button>
            </div>
            <ul className="mt-6 space-y-2">
              {schools.map((school) => (
                <li
                  key={school.id}
                  className="p-4 bg-gray-100 rounded shadow-md w-full max-w-md"
                >
                  <h3 className="font-bold text-blue-600">{school.name}</h3>
                  <p>{school.address}</p>
                  <p>
                    <span className="text-sm text-gray-500">Lat:</span>{" "}
                    {school.latitude}, <span className="text-sm text-gray-500">Lng:</span>{" "}
                    {school.longitude}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        );
      };
      

export default ListSchool
