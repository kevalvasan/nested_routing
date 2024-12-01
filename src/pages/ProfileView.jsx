import React from "react";

const ProfileView = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <div className="flex flex-col items-center mb-8">
        {/* Profile Picture */}
        <div className="w-32 h-32 mb-6 overflow-hidden rounded-full border-4 border-teal-500">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocIHifI_LkXPcn2p_oJfkBniNPGwH8lnBNOcRKvD8dMhVo7uJ19p=s96-c-rg-br100"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name and Title */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-teal-700">Keval Vasan</h1>
          <p className="text-xl text-gray-500">Full Stack Developer</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Bio</h2>
        <p className="text-gray-600 text-lg">
          Passionate about building scalable web applications. Experienced in
          working with the MERN stack and cloud technologies. Always learning
          new technologies to stay ahead in the field.
        </p>
      </div>

      {/* Contact Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Contact Information</h2>
        <div className="flex justify-between">
          <p className="text-lg text-gray-700">Email:</p>
          <p className="text-lg text-teal-500">keval@example.com</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg text-gray-700">Phone:</p>
          <p className="text-lg text-teal-500">+123 456 7890</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg text-gray-700">Website:</p>
          <p className="text-lg text-teal-500">www.kevalvasan.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
