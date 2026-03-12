import { useNavigate } from "react-router-dom";
import { useRegistration } from "../context/RegistrationContext";

export default function EventInfo() {
  const navigate = useNavigate();
  const { isRegistered } = useRegistration();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">TechConf 2026</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            September 12-14, 2026
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Tech Innovation Conference
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 2,000+ developers, designers, and entrepreneurs for three days of
            innovation, learning, and networking at Kigali Convention Centre, Rwanda.
          </p>
          <button
            onClick={() => navigate(isRegistered ? "/already-registered" : "/register")}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
          >
            {isRegistered ? "View My Registration" : "Register Now"}
          </button>
        </div>

        {/* Event Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">40+</div>
            <div className="text-gray-600">Speakers</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">2K+</div>
            <div className="text-gray-600">Attendees</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">3</div>
            <div className="text-gray-600">Days</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">12</div>
            <div className="text-gray-600">Workshops</div>
          </div>
        </div>

        {/* Featured Speakers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Speakers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Dr. Aisha Kamara", role: "AI Research Lead, DeepMind", topic: "The Future of AI" },
              { name: "Marcus Chen", role: "CTO, Vercel", topic: "Edge Computing" },
              { name: "Priya Nair", role: "Founder, BuildSpace", topic: "Developer Experience" },
              { name: "James Okonkwo", role: "Open Source Advocate", topic: "Community Innovation" },
            ].map((speaker, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    {speaker.name[0]}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{speaker.name}</h4>
                    <p className="text-sm text-indigo-600 mb-2">{speaker.role}</p>
                    <p className="text-gray-600 text-sm">"{speaker.topic}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-indigo-600 text-white p-12 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Seats are Limited</h3>
          <p className="text-lg mb-6">Secure your spot at the premier tech conference of 2026</p>
          <button
            onClick={() => navigate(isRegistered ? "/already-registered" : "/register")}
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            {isRegistered ? "View Registration" : "Register for Free"}
          </button>
        </div>
      </div>
    </div>
  );
}
