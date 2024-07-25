import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAxiosInstance } from "../API/axiosInstance";
import { endPoint } from "../API/EndPoints";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        try {
          const response = await userAxiosInstance.get(
            `${endPoint.profile}/${storedUser.id}`
          );
          setUser(response.data);
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

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-fluid">
      <h3 className="text-center">Profile Details</h3>
      <div className="container mt-3 p-1">
        <div className="row">
          <div className="col-6">
            <img
              src={user.profileImage}
              alt="Profile"
              className="img-fluid rounded-circle mb-2"
              style={{ width: "250px", height: "250px" }}
            />
          </div>
          <div className="col-6">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Number:</strong> {user.number}
            </p>
            <p>
              <strong>Date of Birth:</strong> {user.dob}
            </p>
            <Link
              to="/editprofile"
              className="btn btn-primary"
              style={{ marginRight: "5px" }}
            >
              Edit Profile
            </Link>
            <button
              onClick={handleLogout}
              className="btn btn-danger"
              style={{ marginLeft: "5px" }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
