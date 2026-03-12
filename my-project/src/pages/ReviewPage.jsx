import { useNavigate } from "react-router-dom";
import { useRegistration } from "../context/RegistrationContext";

export default function ReviewPage() {
  const navigate = useNavigate();
  const { formData, confirmRegistration } = useRegistration();

  // Redirect if no data
  if (!formData.fullName || !formData.email) {
    navigate("/register");
    return null;
  }

  const handleConfirm = () => {
    confirmRegistration();
    navigate("/confirmation");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">TechConf 2026</h1>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <span className="ml-3 text-gray-600">Register</span>
            </div>
            <div className="flex-1 h-1 bg-indigo-600 mx-4"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <span className="ml-3 font-semibold text-indigo-600">Review</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <span className="ml-3 text-gray-500">Confirm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Review Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Review Your Details</h2>
          <p className="text-gray-600 mb-8">Please confirm everything looks correct before submitting</p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Summary</h3>
            
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
                <span className="text-gray-600 w-48">Ticket Type:</span>
                <span className="font-semibold text-indigo-600">{formData.ticketType}</span>
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

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Note:</span> By confirming, your registration will be saved 
              and your spot at TechConf 2026 will be reserved.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition"
            >
              ← Edit Details
            </button>
            <button
              onClick={handleConfirm}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Confirm Registration ✓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
