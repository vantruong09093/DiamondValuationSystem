import { createContext, useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotifyContext = createContext();

export function useNotify() {
  return useContext(NotifyContext);
}

export function NotifyProvider({ children }) {
    const [notified, setNotified] = useState(false);
  const notifySuccess = (message) => {
    toast.success(message);
  };
  const notifyError = (message) => {
    toast.error(message);
  }
  const notifyFetching = (message) => {
    toast.info(message);
  }
    const notifyWarning = (message) => {
        toast.warn(message);
    }
    const value = {
        notifySuccess,
        notifyError,
        notifyFetching,
        notifyWarning,
        notified,
        setNotified
    }
  return (
    <NotifyContext.Provider value={value}>
      {children}
      <ToastContainer />
    </NotifyContext.Provider>
  );
}
