import React from 'react';
import './style.css';

const Header = ({position, companyName}) => {
    let content = <>
        <h1>{position}</h1>
        <h2>{companyName}</h2>
    </>
    return content
}


function MainInfo({location, contractType, employmentDimension, expirationTime, jobType})
{
    let content = <div className='mainInfoDiv'>
        <p className='mainInfo'>{location}</p>
        <p className='mainInfo'>{contractType}</p>
        <p className='mainInfo'>{employmentDimension}</p>
        <p className='mainInfo'>{expirationTime}</p>
        <p className='mainInfo'>{jobType}</p>
    </div>

    return content;
}

const PositionDesc = ({desc}) => <p>{desc}</p>;

const AdvertList = ({List, about}) => {
    let content = <>
        <p>{about}:</p>
        <ul>
            {List.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </>
    return content;
}

function applyButtonClick()
{
    alert("Apply");
}

const ApplyButton = () => <button onClick={applyButtonClick}>Apply</button>

export default function App()
{
    let content = <>
        <Header position={"Fullstack developer"} companyName={"Microsoft"}/>
        <MainInfo location={"Warsaw"} contractType={"B2B"} employmentDimension={"full-time"} expirationTime={"31.12.2023"} jobType={"remote"}/>
        <ApplyButton/>
        <PositionDesc desc={"Git robota"}/>
        <AdvertList about={"Tech stack"} List={['HTML', 'CSS', 'React']}/>
        <AdvertList about={"Responsibilities"} List={['application development', 'code review']}/>
        <AdvertList about={"requirements"} List={['one year experience', "english B2"]}/>
        <AdvertList about={"What We offer"} List={['MultiSport', "high salary"]}/>
    </>

    return content;
}