import { createContext, useContext, useState, useEffect } from "react";

const RegistrationContext = createContext();

export function RegistrationProvider({ children }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    ticketType: "Standard",
    dietary: "",
    notes: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("registration");
    if (saved) {
      setFormData(JSON.parse(saved));
      setIsRegistered(true);
    }
  }, []);

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const confirmRegistration = () => {
    localStorage.setItem("registration", JSON.stringify(formData));
    setIsRegistered(true);
  };

  const cancelRegistration = () => {
    localStorage.removeItem("registration");
    setIsRegistered(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      ticketType: "Standard",
      dietary: "",
      notes: "",
    });
  };

  return (
    <RegistrationContext.Provider
      value={{
        formData,
        updateFormData,
        isRegistered,
        confirmRegistration,
        cancelRegistration,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  return useContext(RegistrationContext);
}
