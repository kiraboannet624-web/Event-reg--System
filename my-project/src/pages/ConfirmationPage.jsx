import { useNavigate } from "react-router-dom";
import { useRegistration } from "../context/RegistrationContext";

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const { formData } = useRegistration();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">TechConf 2025</h1>
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
            <div className="flex-1 h-1 bg-green-500 mx-4"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <span className="ml-3 text-gray-600">Review</span>
            </div>
            <div className="flex-1 h-1 bg-green-500 mx-4"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <span className="ml-3 font-semibold text-green-600">Confirm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
            ✓
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Registration Confirmed!
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Thank you, <span className="font-semibold text-indigo-600">{formData.fullName}</span>! 
            Your seat at TechConf 2025 has been reserved.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
            <h3 className="font-semibold text-gray-900 mb-3">Event Details:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Attendee:</span>
                <span className="font-semibold">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-semibold">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ticket:</span>
                <span className="font-semibold text-indigo-600">{formData.ticketType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold">September 12-14, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Venue:</span>
                <span className="font-semibold">Kigali Convention Centre</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-8">
            We'll see you at the Kigali Convention Centre. A confirmation email has been sent to your inbox.
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/already-registered")}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              View Full Registration
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
