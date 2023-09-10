import React, { useEffect, useState } from "react";
import { Wrapper } from "./components/wrapper/Wrapper";
import PropagateLoader from "react-spinners/HashLoader";
import "./App.scss"

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <PropagateLoader color="#003463" loading={loading} size={13} /> 
          <img src="../MurasLogo(Opacity0)DARK.png" alt="" />
        </div>
      ) : (
        <Wrapper />
      )}
    </>
  );
};
