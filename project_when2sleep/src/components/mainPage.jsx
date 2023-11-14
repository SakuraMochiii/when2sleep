import React from 'react';
import {useEffect} from "react"
import {useState} from "react"
function mainPage(props) {
    const [timeUntil, setTimeUntil] = React.useState("");
    const [currentTime, setCurrentTime] = useState("");
    //const [currentDateTime, setCurrentDateTime] = useState("");
    
    const calculateTimeDifference = (selectedTime) => {
        const currentTime = Date.now();
        const timeDiffInMilliseconds = new Date(selectedTime) - currentTime;
        const hours = Math.floor(timeDiffInMilliseconds / 3600000);
        const minutes = Math.floor((timeDiffInMilliseconds % 3600000) / 60000);
        return `You have ${hours} hours and ${minutes} minutes`;
    };
    const handleInputChange = (event) => {
        setTimeUntil(event.target.value);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const message = calculateTimeDifference(timeUntil);
            setTimeUntilMessage(message);
            const date = new Date();
            const timeString = date.toLocaleTimeString();
            setCurrentTime(timeString);
        }, 1000);
        return () => clearInterval(interval);
    }, [timeUntil]);

    const [timeUntilMessage, setTimeUntilMessage] = useState("Enter a time to find out how much sleep you can get!");

      
return(
   <>
    <h1>{currentTime}</h1>
   <p>How Much Time Until: </p>
   <input id="timeUntil" type="datetime-local" name="time" value={timeUntil} onChange={handleInputChange} />
   <p id="timeUntilMessage">{timeUntilMessage}</p>
   
   </>);
}

export default mainPage;