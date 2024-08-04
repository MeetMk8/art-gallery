import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../images/registration.jpg"; // Ensure the path is correct

const API = {
  countries: "https://restcountries.com/v3.1/all",
  states: (country) => `https://api.example.com/states?country=${country}`, // Replace with actual endpoint
  cities: (state) => `https://api.example.com/cities?state=${state}`, // Replace with actual endpoint
};

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zipcode: "",
    mobileNo: "",
    alternativeNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch countries
    fetch(API.countries)
      .then((response) => response.json())
      .then((data) => {
        const countryList = data.map((country) => country.name.common).sort();
        setCountries(countryList);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  useEffect(() => {
    if (formData.country) {
      // Fetch states based on selected country
      fetch(API.states(formData.country))
        .then((response) => response.json())
        .then((data) => {
          const stateList = (data.states || []).sort();
          setStates(stateList);
          setFormData((prevData) => ({
            ...prevData,
            state: "",
            city: "",
          }));
        })
        .catch((error) => {
          console.error("Error fetching states:", error);
          setStates([]);
        });
    } else {
      setStates([]);
      setCities([]);
    }
  }, [formData.country]);

  useEffect(() => {
    if (formData.state) {
      // Fetch cities based on selected state
      fetch(API.cities(formData.state))
        .then((response) => response.json())
        .then((data) => {
          const cityList = (data.cities || []).sort();
          setCities(cityList);
          setFormData((prevData) => ({
            ...prevData,
            city: "",
          }));
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
          setCities([]);
        });
    } else {
      setCities([]);
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation logic
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.middleName.trim()) newErrors.middleName = "Middle Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.zipcode.trim()) newErrors.zipcode = "Zipcode is required";
    if (!/^\d{5}(-\d{4})?$/.test(formData.zipcode)) newErrors.zipcode = "Zipcode must be a valid format (e.g., 12345 or 12345-6789)";
    if (!formData.mobileNo.trim()) newErrors.mobileNo = "Mobile No is required";
    if (!/^\d{10}$/.test(formData.mobileNo)) newErrors.mobileNo = "Mobile No must be 10 digits";
    if (formData.alternativeNo && !/^\d{10}$/.test(formData.alternativeNo)) newErrors.alternativeNo = "Alternative No must be 10 digits";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters long";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle successful submission (e.g., send data to API)
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl w-full bg-white mt-20 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Name Fields */}
            <div className="col-span-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                aria-describedby="firstNameError"
                aria-invalid={errors.firstName ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.firstName && <p id="firstNameError" className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div className="col-span-1">
              <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">Middle Name</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                aria-describedby="middleNameError"
                aria-invalid={errors.middleName ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.middleName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.middleName && <p id="middleNameError" className="text-red-600 text-sm mt-1">{errors.middleName}</p>}
            </div>
            <div className="col-span-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                aria-describedby="lastNameError"
                aria-invalid={errors.lastName ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.lastName && <p id="lastNameError" className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
            </div>

            {/* Gender */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Female</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={handleChange}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Other</span>
                </label>
              </div>
              {errors.gender && <p className="text-red-600 text-sm mt-1">{errors.gender}</p>}
            </div>

            {/* Country */}
            <div className="col-span-1">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                aria-describedby="countryError"
                aria-invalid={errors.country ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              {errors.country && <p id="countryError" className="text-red-600 text-sm mt-1">{errors.country}</p>}
            </div>

            {/* State */}
            <div className="col-span-1">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                aria-describedby="stateError"
                aria-invalid={errors.state ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {errors.state && <p id="stateError" className="text-red-600 text-sm mt-1">{errors.state}</p>}
            </div>

            {/* City */}
            <div className="col-span-1">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                aria-describedby="cityError"
                aria-invalid={errors.city ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.city && <p id="cityError" className="text-red-600 text-sm mt-1">{errors.city}</p>}
            </div>

            {/* Address */}
            <div className="col-span-1">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                aria-describedby="addressError"
                aria-invalid={errors.address ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.address && <p id="addressError" className="text-red-600 text-sm mt-1">{errors.address}</p>}
            </div>

            {/* Zipcode */}
            <div className="col-span-1">
              <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">Zipcode</label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                aria-describedby="zipcodeError"
                aria-invalid={errors.zipcode ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.zipcode ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.zipcode && <p id="zipcodeError" className="text-red-600 text-sm mt-1">{errors.zipcode}</p>}
            </div>

            {/* Mobile No */}
            <div className="col-span-1">
              <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">Mobile No</label>
              <input
                type="text"
                id="mobileNo"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                aria-describedby="mobileNoError"
                aria-invalid={errors.mobileNo ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.mobileNo ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.mobileNo && <p id="mobileNoError" className="text-red-600 text-sm mt-1">{errors.mobileNo}</p>}
            </div>

            {/* Alternative No */}
            <div className="col-span-1">
              <label htmlFor="alternativeNo" className="block text-sm font-medium text-gray-700">Alternative No (Optional)</label>
              <input
                type="text"
                id="alternativeNo"
                name="alternativeNo"
                value={formData.alternativeNo}
                onChange={handleChange}
                aria-describedby="alternativeNoError"
                aria-invalid={errors.alternativeNo ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.alternativeNo ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.alternativeNo && <p id="alternativeNoError" className="text-red-600 text-sm mt-1">{errors.alternativeNo}</p>}
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-describedby="emailError"
                aria-invalid={errors.email ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p id="emailError" className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="col-span-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                aria-describedby="passwordError"
                aria-invalid={errors.password ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.password && <p id="passwordError" className="text-red-600 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="col-span-1">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                aria-describedby="confirmPasswordError"
                aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.confirmPassword && <p id="confirmPasswordError" className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
          <p className="text-center mt-4">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
