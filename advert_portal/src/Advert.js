import React from 'react';

function MainInfo({position, companyName, location, contractType, employmentDimension, expirationTime, jobType})
{
    let content = <>
        <h1>{position}</h1>
        <h2>{companyName}</h2>
        <p>{location}</p>
        <p>{contractType}</p>
        <p>{employmentDimension}</p>
        <p>{expirationTime}</p>
        <p>{jobType}</p>
    </>

    return content;
}

export default function App()
{
    let content = <>
        <MainInfo position={"Fullstack developer"} companyName={"Microsoft"} location={"Warsaw"} contractType={"B2B"} employmentDimension={"full-time"} expirationTime={"31.12.2023"} jobType={"remote"}/>
    </>

    return content;
}