import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RegistrationProvider, useRegistration } from "./context/RegistrationContext";
import EventInfo from "./pages/EventInfo";
import RegistrationForm from "./pages/RegistrationForm";
import ReviewPage from "./pages/ReviewPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import AlreadyRegistered from "./pages/AlreadyRegistered";

function AppRoutes() {
  const { isRegistered } = useRegistration();

  return (
    <Routes>
      <Route path="/" element={<EventInfo />} />
      <Route
        path="/register"
        element={isRegistered ? <Navigate to="/already-registered" replace /> : <RegistrationForm />}
      />
      <Route
        path="/review"
        element={isRegistered ? <Navigate to="/already-registered" replace /> : <ReviewPage />}
      />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route
        path="/already-registered"
        element={isRegistered ? <AlreadyRegistered /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default function App() {
  return (
    <RegistrationProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RegistrationProvider>
  );
}