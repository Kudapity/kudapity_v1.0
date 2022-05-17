import React, { useState } from 'react';
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

const Data1 = [{content: []}]

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
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    return (
        <div className='home_container'>
            <section className='side_bar'>
            <h4 onClick={() => setShow1(!show1)} className='side_bar1'>
                <Menu title={Data[0].title} content={Data1[0].content}/>
            </h4>
                {show1 && <Menu content={Data[0].content}/>}   
            <h4 onClick={() => setShow2(!show2)} className='side_bar2'>
                <Menu title={Data[1].title} content={Data1[0].content}/>
            </h4>
                {show2 && <Menu content={Data[1].content}/>}
            <h4 onClick={() => setShow3(!show3)} className='side_bar3'>
                <Menu title={Data[2].title} content={Data1[0].content}/>
            </h4>
                {show3 && <Menu content={Data[2].content}/>}
            </section>
            <div className='main'>
                {ListOfEvents}
            </div>
        </div>
    );
};

export default Home;