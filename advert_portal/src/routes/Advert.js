import React from 'react';
import '../styles/advert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faFileContract, faClock, faTimeline, faHouse } from '@fortawesome/free-solid-svg-icons'


const Header = ({position, companyName}) => {
    let content = <header>
        <h1>{position}</h1>
        <h2>{companyName}</h2>
    </header>
    return content
}


function MainInfo({location, contractType, employmentDimension, expirationTime, jobType})
{
    let content = <div className='mainInfoDiv'>
        <p className='mainInfo'><FontAwesomeIcon icon={faHouse} className='icon' style={{color: "#ffffff",}} /><span>{location}</span></p>
        <p className='mainInfo'><FontAwesomeIcon icon={faFileContract} className='icon' style={{color: "#ffffff",}} /><span>{contractType}</span></p>
        <p className='mainInfo'><FontAwesomeIcon icon={faClock} className='icon' style={{color: "#ffffff",}} /><span>{employmentDimension}</span></p>
        <p className='mainInfo'><FontAwesomeIcon icon={faTimeline} className='icon' style={{color: "#ffffff",}} /><span>{expirationTime}</span></p>
        <p className='mainInfo'><FontAwesomeIcon icon={faGlobe} className='icon' style={{color: "#ffffff",}} /><span>{jobType}</span></p>
    </div>

    return content;
}

const PositionDesc = ({desc}) => <p className='positionDesc'>{desc}</p>;

const AdvertList = ({List, about}) => {
    let content = <div className='advertList'>
        <p>{about}:</p>
        <ul>
            {List.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
    return content;
}

function applyButtonClick()
{
    alert("You Hired!");
}

const Others = () => {
    return <></>;
}

const Salary = ({howMuch, ...props}) => <p {...props}>{howMuch} PLN</p>

const ApplyButton = () => <button className='applyButton' onClick={applyButtonClick}>Apply</button>

export default function AdvertPage()
{
    let content = <>
        <Header position={"Fullstack developer"} companyName={"Microsoft"}/>
        <Salary howMuch={"10000"} className="salaryHD"/>
        <MainInfo location={"Warsaw"} contractType={"B2B"} employmentDimension={"full-time"} expirationTime={"31.12.2023"} jobType={"remote"}/>
        <PositionDesc desc={"Git robota"}/>
        <div className='advertListsDiv'>
            <AdvertList about={"Tech stack"} List={['HTML', 'CSS', 'React']}/>
            <AdvertList about={"Responsibilities"} List={['application development', 'code review']}/>
            <AdvertList about={"requirements"} List={['one year experience', "english B2"]}/>
            <AdvertList about={"What We offer"} List={['MultiSport', "high salary"]}/>
        </div>
        <Others />
        <div className='applyButtonDiv'>
            <Salary howMuch={"10000"}/>
            <ApplyButton/>
        </div>
    </>

    return content;
}