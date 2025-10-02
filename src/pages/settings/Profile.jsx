import { useState } from "react";
import profileImg from "../../assets/profile.png";

function Profile() {
  const [preview, setPreview] = useState(profileImg);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <main className="flex items-center justify-center bg-[#0d1117] py-5 px-4">
      <section className="w-full max-w-md bg-[#161b22]/80 border border-[#00B8D9]/30 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          User Profile
        </h2>

        <form className="space-y-4">
          <div className="flex flex-col items-center">
            <label
              htmlFor="profileImage"
              className="cursor-pointer flex flex-col items-center"
            >
              <img
                src={preview}
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-[#00B8D9] mb-2 object-cover"
              />
              <span className="text-sm text-[#00B8D9] hover:underline">
                Change Photo
              </span>
            </label>
            <input
              type="file"
              id="profileImage"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00B8D9]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00B8D9]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#00B8D9] py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-transform duration-150 hover:-translate-y-1"
          >
            Save Changes
          </button>
        </form>
      </section>
    </main>
  );
}

export default Profile;
