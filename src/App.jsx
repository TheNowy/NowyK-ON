import React, { useEffect, useState } from "react";
import { Wrapper } from "./components/wrapper/Wrapper";
import PropagateLoader from "react-spinners/PropagateLoader";
import "./App.scss"

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <PropagateLoader color="white" loading={loading} size={30} /> 
        </div>
      ) : (
        <Wrapper />
      )}
    </>
  );
};
