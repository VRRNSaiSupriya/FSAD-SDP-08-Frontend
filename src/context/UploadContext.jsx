import React, { createContext, useContext, useState } from "react";

const UploadContext = createContext();

export const UploadProvider = ({ children }) => {

  const [files, setFiles] = useState([]);

  const addFile = (file) => {
    setFiles((prev) => [...prev, file]);
  };

  return (
    <UploadContext.Provider value={{ files, addFile }}>
      {children}
    </UploadContext.Provider>
  );
};

export const useUpload = () => useContext(UploadContext);