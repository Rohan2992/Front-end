import { useEffect, useState } from "react";
import ClassComponent from "./ClassComponent"

function handleOnline(set) {
  set("true");
}

function handleOffline(set) {
  set("false");
}

function useGiveStatus() {
  const [status, setState] = useState("true");
  useEffect(() => {
    window.addEventListener("online", () => handleOnline(setState));
    window.addEventListener("offline", () => handleOffline(setState));

    return () => {
      removeEventListener("online", handleOnline);
      removeEventListener("offline", handleOffline);
    };
  }, []);

  return status;
}
const OnlineStatus = () => {
  const status = useGiveStatus();

  return (
    <>
    <ClassComponent />
    <h1>
      online status :{status}
    </h1>

    </>
  );
};

export default OnlineStatus;
