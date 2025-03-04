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

export {convertTimestamp, convertDateToFormate}