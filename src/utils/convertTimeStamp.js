import { Timestamp } from "firebase/firestore";

const convertTimestamp = (timesStamp) => {
    try {
    const milliseconds = timesStamp.seconds * 1000 + timesStamp.nanoseconds / 1000000; // Convert to milliseconds
    const date = new Date(milliseconds);
    return date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    } catch (error) {
        
    }
};

const convertDateToFormate = (timesStamp) => {
    try {
    const date = new Date(timesStamp);
    return date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    } catch (error) {
        
    }
};

const convertDateToTimeStamp = (timeStamp) => {
    try {
        if (!timeStamp || !timeStamp.seconds) return "Invalid Date"; // Handle invalid input

        const date = new Timestamp(timeStamp.seconds, timeStamp.nanoseconds).toDate();
        
        return date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) 
        +  " " + date.toLocaleTimeString("en-US", {
            hour: "2-digit", // 12-hour format
            minute: "2-digit", // Adds minutes
             hour12: true, // Ensures AM/PM format
          });

    } catch (error) {
        console.error("Error converting timestamp:", error);
        return "Invalid Date";
    }
};

const convertTimeToFormate = (timesStamp) => {
    try {
        const date = new Timestamp(timesStamp.seconds, timesStamp.nanoseconds).toDate();
    return date.toLocaleTimeString("en-US", {
        hour: "2-digit", // 12-hour format
        minute: "2-digit", // Adds minutes
         hour12: true, // Ensures AM/PM format
      });
} catch (error) {
        
    }
};

const sortByTime = (dataArray) => {
    return dataArray.sort((a, b) => {
      const timeA = new Timestamp(a.createdAt.seconds, a.createdAt.nanoseconds).toDate();
      const timeB = new Timestamp(b.createdAt.seconds, b.createdAt.nanoseconds).toDate();
      return timeB - timeA
    });
  };

export {convertTimestamp, convertDateToFormate, convertTimeToFormate, sortByTime, convertDateToTimeStamp}