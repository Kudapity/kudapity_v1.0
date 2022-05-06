import React from 'react';
import Menu  from "./Menu/index";
import Event from './Event';
import "./style.css";

const Data = [
    {
        title: "ALL EVENTS:",
        content: [
            "concert",
            "perfomance",
            "exhibition",
            "opening of...",
            "..."
        ]
    },
    {
        title: "CITY:",
        content: [
            "Kyiv",
            "Lviv",
            "Kharkiv",
            "Odessa",
            "..."
        ]
    },
    {
        title: "DATE OF EVENT:",
        content: [
            "today",
            "tomorrow",
            "this week",
            "opening of...",
            "..."
        ]
    },
]

const EventsInfo = [
    {
        title: "information about event0",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Event_2010_Intertitle.svg/1200px-The_Event_2010_Intertitle.svg.png"
    },
    {
        title: "information about event1",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Event_2010_Intertitle.svg/1200px-The_Event_2010_Intertitle.svg.png"
    },
    {
        title: "information about event2",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Event_2010_Intertitle.svg/1200px-The_Event_2010_Intertitle.svg.png"
    },
    {
        title: "information about event3",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Event_2010_Intertitle.svg/1200px-The_Event_2010_Intertitle.svg.png"
    },
    {
        title: "information about event4",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Event_2010_Intertitle.svg/1200px-The_Event_2010_Intertitle.svg.png"
    },
    {
        title: "information about event5",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Event_2010_Intertitle.svg/1200px-The_Event_2010_Intertitle.svg.png"
    },
    {
        title: "information about event6",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Event_2010_Intertitle.svg/1200px-The_Event_2010_Intertitle.svg.png"
    },
    {
        title: "information about event7",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Event_2010_Intertitle.svg/1200px-The_Event_2010_Intertitle.svg.png"
    },
    {
        title: "information about event8",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Event_2010_Intertitle.svg/1200px-The_Event_2010_Intertitle.svg.png"
    }
]

const Home = () => {
    const ListOfEvents = EventsInfo.map((item) => 
        <Event title={item.title} src={item.src}/>
    );
    return (
        <div className='home_container'>
            <div className='side_bar'>
                <Menu title={Data[0].title} content={Data[0].content} />
                <Menu title={Data[1].title} content={Data[1].content} />
                <Menu title={Data[2].title} content={Data[2].content} />
            </div>  

            <div className='main'>
                {ListOfEvents}
            </div>
        </div>
    );
};

export default Home;