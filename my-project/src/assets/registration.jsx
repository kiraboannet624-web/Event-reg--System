import { createContext, useContext, useState, useEffect } from "react";

const RegistrationContext = createContext();

const STORAGE_KEY = "techconf_registration";

const defaultFormData = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  ticketType: "Standard",
  dietary: "",
  notes: "",
};

export function RegistrationProvider({ children }) {
  const [formData, setFormData] = useState(defaultFormData);
  const [isRegistered, setIsRegistered] = useState(false);
  const [savedRegistration, setSavedRegistration] = useState(null);

  // 🔍 On app load, check if the user already registered
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      setSavedRegistration(parsed);
      setIsRegistered(true);
    }
  }, []);

  const updateFormData = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  // 💾 Called when user clicks "Confirm" — saves to localStorage
  const confirmRegistration = () => {
    const registration = { ...formData, registeredAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(registration));
    setSavedRegistration(registration);
    setIsRegistered(true);
  };

  // 🗑️ Called when user cancels their registration
  const cancelRegistration = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsRegistered(false);
    setSavedRegistration(null);
    setFormData(defaultFormData);
  };

  // ✏️ Called when user wants to edit — loads saved data back into form
  const startEditing = () => {
    if (savedRegistration) setFormData(savedRegistration);
    cancelRegistration();
  };

  return (
    <RegistrationContext.Provider
      value={{
        formData,
        updateFormData,
        isRegistered,
        savedRegistration,
        confirmRegistration,
        cancelRegistration,
        startEditing,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  return useContext(RegistrationContext);
}