import { useNavigate } from "react-router-dom";
import { useRegistration } from "../context/RegistrationContext";

export default function AlreadyRegistered() {
  const navigate = useNavigate();
  const { formData, cancelRegistration } = useRegistration();

  const handleEdit = () => {
    navigate("/register");
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel your registration? This cannot be undone.")) {
      cancelRegistration();
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">TechConf 2025</h1>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 font-semibold">
              ✓ You are already registered for TechConf 2025
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {formData.fullName.split(" ")[0]}!
          </h2>
          <p className="text-gray-600 mb-8">
            Here are your registration details for the conference.
          </p>

          {/* Ticket Info */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-indigo-100 text-sm mb-1">Your Ticket</p>
                <p className="text-3xl font-bold">{formData.ticketType}</p>
              </div>
              <div className="text-right">
                <p className="text-indigo-100 text-sm mb-1">Event</p>
                <p className="font-bold">TechConf 2025</p>
                <p className="text-sm text-indigo-100">Sep 12-14 · Kigali, Rwanda</p>
              </div>
            </div>
          </div>

          {/* Registration Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Details</h3>
            
            <div className="space-y-3">
              <div className="flex border-b pb-3">
                <span className="text-gray-600 w-48">Full Name:</span>
                <span className="font-semibold text-gray-900">{formData.fullName}</span>
              </div>
              <div className="flex border-b pb-3">
                <span className="text-gray-600 w-48">Email Address:</span>
                <span className="font-semibold text-gray-900">{formData.email}</span>
              </div>
              <div className="flex border-b pb-3">
                <span className="text-gray-600 w-48">Phone Number:</span>
                <span className="font-semibold text-gray-900">{formData.phone}</span>
              </div>
              <div className="flex border-b pb-3">
                <span className="text-gray-600 w-48">Organization:</span>
                <span className="font-semibold text-gray-900">{formData.organization || "—"}</span>
              </div>
              <div className="flex border-b pb-3">
                <span className="text-gray-600 w-48">Dietary Requirements:</span>
                <span className="font-semibold text-gray-900">{formData.dietary || "No restrictions"}</span>
              </div>
              <div className="flex pb-3">
                <span className="text-gray-600 w-48">Additional Notes:</span>
                <span className="font-semibold text-gray-900">{formData.notes || "None"}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={handleEdit}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              ✏ Edit Registration
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition"
            >
              ← Back to Home
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition ml-auto"
            >
              Cancel Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
