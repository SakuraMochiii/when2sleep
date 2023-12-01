import React from 'react';
import {useEffect} from "react"
import {useState} from "react"
function mainPage(props) {
    const [timeUntil, setTimeUntil] = useState("");
    const [twoTime, settwoTime] = useState("");
    const [twoTime2, settwoTime2] = useState("");
    const [hoursSleep, sethoursSleep] = useState("");
    const [wakeUp, setwakeUp] = useState("");
    const [timeZone, settimeZone] = useState("");
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

    const calculateWakeTime= (hrs, selectedTime) => {
        const wakeUpTime = new Date(selectedTime);
        wakeUpTime.setHours(wakeUpTime.getHours() - hrs);
        if (isNaN(wakeUpTime)) {
            return "Enter a time to find out when you should sleep!";
        }
        return `You need to sleep at ${wakeUpTime.toLocaleTimeString()}`;
    };

    const calculateTimeZone = (selectedTime) => {
        const curTime = new Date(selectedTime);
        curTime.setHours(curTime.getHours() - hrs);
        if (isNaN(curTime)) {
            return "Enter a time to find out what*** time zone best suits your sleep schedule!";
        }
        const timeZones = {
            "Shanghai": 8,
            "New York": -5,
            "Los Angeles": -8,
            "Paris": 1
        };
        const elevenPMUTC = (curTime.getHours() + 23) % 24;
        const timeDifferences = {};
        for (let zone in timeZones) {
            const timeZoneHour = (elevenPMUTC - timeZones[zone] + 24) % 24;
            timeDifferences[zone] = timeZoneHour;
        }
        let closestZone = null;
        let minDifference = Infinity;
        for (let zone in timeDifferences) {
            const difference = timeDifferences[zone];
            if (difference < minDifference) {
                minDifference = difference;
                closestZone = zone;
            }
        }
        return `You are most suited to ${closestZone} time`;
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

    const handleInputHoursChange = (event) => {
        sethoursSleep(event.target.value);
    };

    const handleInputwakeChange = (event) => {
        setwakeUp(event.target.value);
    };

    const handleInputTimeZoneChange = (event) => {
        settimeZone(event.target.value);
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

            const hoursSleepMessage = calculateWakeTime(hoursSleep, wakeUp);
            sethoursSleepMessage(hoursSleepMessage);

            const timeZoneMessage = calculateTimeZone(timeZone);
            settimeZoneMessage(timeZoneMessage);

        }, 1000);
        return () => clearInterval(interval);
    }, [timeUntil, twoTime, twoTime2, wakeUp, hoursSleep, timeZone]);

    const [timeUntilMessage, setTimeUntilMessage] = useState("Enter a time to find out how much sleep you can get!");
    const [twoTimeMessage, settwoTimeMessage] = useState("Enter a time to find out how much sleep you can get!");
    const [hoursSleepMessage, sethoursSleepMessage] = useState("Enter a time to find out when you should sleep!");
    const [timeZoneMessage, settimeZoneMessage] = useState("Enter a time to find out what time zone best suits your sleep schedule!");

    
return(
   <div>
    <div id="currentTime">
    <h1>{currentTime}</h1>
   </div><br/>

   <div class="moon">
    <img src="../../images/starMoon.png"/>
    <div class="calculateDiv">
   <p class="question">How Many Hours of Sleep Will I Get If I Sleep Now?</p>
   <input id="timeUntil" type="datetime-local" name="time" value={timeUntil} onChange={handleInputChange} />
   <p id="timeUntilMessage">{timeUntilMessage}</p>
    </div><br/>
    </div>

    <div class="leftmoon">
    <img src="../../images/starMoon.png"/>
    <div class="calculateDiv">
   <p class="question">How Many Hours of Sleep Will I Get?</p>
   <input id="twoTimes" type="datetime-local" name="time" value={twoTime} onChange={handleInputtimeChange} />
   &nbsp; to &nbsp;
   <input id="twoTimes2" type="datetime-local" name="time" value={twoTime2} onChange={handleInputtime2Change} />
   <p id="twoTimesMessage">{twoTimeMessage}</p>
   </div><br/>
   </div>

   <div class="moon">
   <img src="../../images/starMoon.png"/>
   <div class="calculateDiv">
   <p class="question">When should I sleep to get &nbsp; 
   <input type="number" id="hoursSleep" name="hoursSleep" value={hoursSleep} onChange={handleInputHoursChange} min="0" max="24"/>
   &nbsp;  hours of sleep if <br/> I need to wake up at&nbsp;
   <input id="wakeUp" type="datetime-local" name="wakeUp" value={wakeUp} onChange={handleInputwakeChange} /></p>
   <p id="hoursSleepMessage">{hoursSleepMessage}</p>
   </div><br/>
   </div>
   
   <div class="leftmoon">
    <img src="../../images/starMoon.png"/>
    <div class="calculateDiv">
   <p class="question">What Time Zone am I Sleeping In?</p>
   <input id="timeZone" type="datetime-local" name="time" value={timeZone} onChange={handleInputTimeZoneChange} />
   <p id="timeZoneMessage">{timeZoneMessage}</p>
   </div>
   </div>
   </div>);
}

export default mainPage;