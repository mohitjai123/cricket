import { useState, useEffect } from "react";

export default function CountdownTimer({dateAndTime}) {
  const targetDate = new Date(dateAndTime||"March 10, 2025 19:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${days}d ${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex flex-col justify-center rounded-lg p-10 w-fit items-center bg-gray-900 text-white">
      <div className="text-4xl font-semibold mb-4">March 10, 2025 - 7:30 PM</div>
      <div
        className={`text-6xl font-bold p-6 rounded-lg shadow-lg transition-all duration-500 ${
          timeLeft <= 10000 ? "text-red-500 animate-pulse" : "text-white"
        } bg-gray-800 border border-gray-700`}
      >
        {formatTime(timeLeft)}
      </div>
    </div>
  );
}
