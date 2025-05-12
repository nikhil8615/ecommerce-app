import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import axios from "axios";

const ProfileSkeleton = ({ theme }) => {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div
            className={`w-32 h-32 rounded-full mx-auto ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
          <div className="mt-4 space-y-3">
            <div
              className={`h-4 w-3/4 mx-auto rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
            <div
              className={`h-4 w-1/2 mx-auto rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 space-y-6">
          <div className="space-y-3">
            <div
              className={`h-6 w-32 rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={`h-10 rounded-md ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div
              className={`h-6 w-32 rounded-md ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={`h-10 rounded-md ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyProfile = () => {
  const { theme, token, backendUrl } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    healthGoals: [],
    dietaryPreferences: [],
    allergies: [],
    medicalConditions: [],
  });

  const healthGoalsOptions = [
    "Weight Management",
    "Muscle Building",
    "Energy Boost",
    "Better Sleep",
    "Stress Reduction",
    "Immune Support",
    "Heart Health",
    "Digestive Health",
  ];

  const dietaryPreferencesOptions = [
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Dairy-Free",
    "Keto",
    "Paleo",
    "Mediterranean",
    "Low-Carb",
  ];

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        if (!token) return;

        const response = await axios.get(`${backendUrl}/api/user/profile`, {
          headers: { token },
        });

        if (response.data.success) {
          setProfileData(response.data.profile);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load profile data:", error);
        setIsLoading(false);
      }
    };

    loadProfileData();
  }, [token, backendUrl]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (category, value) => {
    setProfileData((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const handleSaveProfile = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/user/update-profile`,
        profileData,
        { headers: { token } }
      );

      if (response.data.success) {
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div
        className={`${
          theme === "dark" ? "text-white" : "bg-white text-gray-900"
        } border-t pt-16`}
      >
        <div className="text-2xl mb-8">
          <Title text1={"MY"} text2={"PROFILE"} />
        </div>
        <ProfileSkeleton theme={theme} />
      </div>
    );
  }

  return (
    <div
      className={`${
        theme === "dark" ? "text-white" : "bg-white text-gray-900"
      } border-t pt-16`}
    >
      <div className="text-2xl mb-8">
        <Title text1={"MY"} text2={"PROFILE"} />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Picture and Basic Info */}
        <div className="w-full md:w-1/3">
          <div className="flex flex-col items-center">
            <img
              src={assets.profile_placeholder}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">{profileData.name}</h3>
            <p className="text-sm text-gray-500">{profileData.email}</p>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Personal Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className={`p-2 rounded-md border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-300"
                }`}
              />
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={`p-2 rounded-md border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-300"
                }`}
              />
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className={`p-2 rounded-md border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-300"
                }`}
              />
              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
                placeholder="Address"
                className={`p-2 rounded-md border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-300"
                }`}
              />
            </div>
          </div>

          {/* Health Goals */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Health Goals</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {healthGoalsOptions.map((goal) => (
                <label
                  key={goal}
                  className={`flex items-center space-x-2 p-2 rounded-md border ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={profileData.healthGoals.includes(goal)}
                    onChange={() => handleCheckboxChange("healthGoals", goal)}
                    className="rounded"
                  />
                  <span className="text-sm">{goal}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Dietary Preferences */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Dietary Preferences</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dietaryPreferencesOptions.map((preference) => (
                <label
                  key={preference}
                  className={`flex items-center space-x-2 p-2 rounded-md border ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={profileData.dietaryPreferences.includes(
                      preference
                    )}
                    onChange={() =>
                      handleCheckboxChange("dietaryPreferences", preference)
                    }
                    className="rounded"
                  />
                  <span className="text-sm">{preference}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Allergies and Medical Conditions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              Allergies & Medical Conditions
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Allergies</label>
                <input
                  type="text"
                  name="allergies"
                  value={profileData.allergies.join(", ")}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      allergies: e.target.value
                        .split(",")
                        .map((item) => item.trim()),
                    }))
                  }
                  placeholder="Enter allergies (comma-separated)"
                  className={`w-full p-2 rounded-md border ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Medical Conditions</label>
                <input
                  type="text"
                  name="medicalConditions"
                  value={profileData.medicalConditions.join(", ")}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      medicalConditions: e.target.value
                        .split(",")
                        .map((item) => item.trim()),
                    }))
                  }
                  placeholder="Enter medical conditions (comma-separated)"
                  className={`w-full p-2 rounded-md border ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSaveProfile}
              className={`px-6 py-2 rounded-md ${
                theme === "dark"
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              } transition-colors duration-200`}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
