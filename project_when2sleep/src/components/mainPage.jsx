import React from 'react';
import {useEffect} from "react"
import {useState} from "react"
function mainPage(props) {
    const [timeUntil, setTimeUntil] = useState("");
    const [twoTime, settwoTime] = useState("");
    const [twoTime2, settwoTime2] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    //const [currentDateTime, setCurrentDateTime] = useState("");
    
   
    const calculateTimeDifference = (selectedTime) => {
        const currentTime = Date.now();
        const timeDiffInMilliseconds = new Date(selectedTime) - currentTime;
        const hours = Math.floor(timeDiffInMilliseconds / 3600000);
        const minutes = Math.floor((timeDiffInMilliseconds % 3600000) / 60000);
        if (isNaN(hours)) {
            return "Enter a time to find out how much sleep you can get!";
        }
        return `You have ${hours} hours and ${minutes} minutes`;
    };
    const calculatetwoTimeDifference = (anotherTime, selectedTime) => {
        const timeDiffInMilliseconds = new Date(selectedTime) -  new Date(anotherTime);
        const hours2 = Math.floor(timeDiffInMilliseconds / 3600000);
        const minutes2 = Math.floor((timeDiffInMilliseconds % 3600000) / 60000);
        if (isNaN(hours2)) {
            return "Enter a time to find out how much sleep you can get!";
        }
        return `You have ${hours2} hours and ${minutes2} minutes`;
    };

    const handleInputChange = (event) => {
        setTimeUntil(event.target.value);
    };

    const handleInputtimeChange = (event) => {
        settwoTime(event.target.value);
    };

    const handleInputtime2Change = (event) => {
        settwoTime2(event.target.value);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const message = calculateTimeDifference(timeUntil);
            setTimeUntilMessage(message);

            const date = new Date();
            const timeString = date.toLocaleTimeString();
            setCurrentTime(timeString);

            const twoTimemessage = calculatetwoTimeDifference(twoTime, twoTime2);
            settwoTimeMessage(twoTimemessage);

        }, 1000);
        return () => clearInterval(interval);
    }, [timeUntil, twoTime, twoTime2]);

    const [timeUntilMessage, setTimeUntilMessage] = useState("Enter a time to find out how much sleep you can get!");
    const [twoTimeMessage, settwoTimeMessage] = useState("Enter a time to find out how much sleep you can get!");
      
return(
   <>
    <h1>{currentTime}</h1>

    <div>
   <p>Time Until: &nbsp; 
   <input id="timeUntil" type="datetime-local" name="time" value={timeUntil} onChange={handleInputChange} /></p>
   <p id="timeUntilMessage">{timeUntilMessage}</p>
    </div>

    <div>
   <p>How much sleep will I get if I sleep between these two times?</p>
   <input id="twoTimes" type="datetime-local" name="time" value={twoTime} onChange={handleInputtimeChange} />
   &nbsp; 
   <input id="twoTimes2" type="datetime-local" name="time" value={twoTime2} onChange={handleInputtime2Change} />
   <p id="twoTimesMessage">{twoTimeMessage}</p>
   </div>
   </>);
}

export default mainPage;