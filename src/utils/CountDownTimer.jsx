import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { popupAtom } from "./popupAtom";
import { Link } from "react-router-dom";

export default function CountdownTimer({ dateAndTime }) {
  const targetDate = new Date(dateAndTime || "March 10, 2025 19:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  const setPopup = useSetRecoilState(popupAtom);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [dateAndTime, timeLeft]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${days}d ${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Check if the event is live (within 2 hours of event time or already passed)
  const isEventLive = timeLeft <= 0;
  const isWithinTwoHours = (new Date().getTime() - targetDate) <= 2 * 60 * 60 * 1000 && (new Date().getTime() > targetDate);

  return (
    <div className="flex flex-col mx-auto justify-center rounded-lg p-10 lg:w-fit items-center bg-gray-900 text-white">
      <div className="text-2xl font-semibold mb-4">{dateAndTime || "March 20, 2025 - 7:30 PM"}</div>

      {isEventLive || isWithinTwoHours ? (
        <div className="text-4xl flex justify-center items-center gap-2 font-bold text-green-500 animate-pulse mb-4">
          <div className="h-5 w-5 rounded-full bg-green-500"></div> 
          <h4>Event Live</h4>
        </div>
      ) : (
        <div
          className={`text-4xl font-bold p-6 rounded-lg shadow-lg transition-all duration-500 ${
            timeLeft <= 10000 ? "text-red-500 animate-pulse" : "text-white"
          } bg-gray-800 border border-gray-700`}
        >
          {formatTime(timeLeft)}
        </div>
      )}

      <Link
        to="/registration-now"
        className="bg-white text-primary hover:text-white hover:bg-transparent border rounded-full mt-5 px-8 py-2 font-bold duration-300"
      >
        Register Now
      </Link>
    </div>
  );
}
