import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userAxiosInstance } from "../API/axiosInstance";
import { endPoint } from "../API/EndPoints";
import imageCompression from "browser-image-compression";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    number: "",
    dob: "",
    profileImage: "",
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        try {
          const response = await userAxiosInstance.get(
            `${endPoint.profile}/${storedUser.id}`
          );
          setFormData(response.data);
        } catch (error) {
          console.error("Failed to fetch profile:", error.response || error);
          localStorage.removeItem("user");
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (image) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };

      try {
        const compressedImage = await imageCompression(image, options);
        const base64Image = await convertBase64(compressedImage);
        formData.profileImage = base64Image;

        console.log("Updating profile with image:", formData);
        await userAxiosInstance.put(
          `${endPoint.editProfile}/${storedUser.id}`,
          formData
        );
        navigate("/profile");
      } catch (error) {
        console.error(
          "Profile update failed with image:",
          error.response || error
        );
        alert("Profile update failed");
      }
    } else {
      try {
        console.log("Updating profile without image:", formData);
        await userAxiosInstance.put(
          `${endPoint.editProfile}/${storedUser.id}`,
          formData
        );
        navigate("/profile");
      } catch (error) {
        console.error(
          "Profile update failed without image:",
          error.response || error
        );
        alert("Profile update failed");
      }
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="container-fluid">
      <div className="container mt-3 p-1">
        <h3>Edit Profile</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              ID
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Number
            </label>
            <input
              type="text"
              className="form-control"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="profileImage" className="form-label">
              Profile Image
            </label>
            <input
              type="file"
              className="form-control"
              id="profileImage"
              name="profileImage"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
