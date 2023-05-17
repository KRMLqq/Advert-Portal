import React from 'react';


function Logo({source, altText})
{
    return <img src={source} alt={altText} className='userLogo'></img>;
}

function Name({firstName, lastName})
{
    return <h1>{firstName} {lastName}</h1>
}

function JobDescription({description})
{
    return <p>{description}</p>
}

function MainDescription({jobPosition, home, desc})
{
    const description = <>
        <p>Aktualne stanowisko: {jobPosition}</p>
        <p>Miejsce zamieszkania: {home}</p>
        <JobDescription description={desc}/>
    </>
    return description;
}

function App()
{
    const content = <>
    <Logo source={"logo2.png"} altText={"test"}/>
    <Name firstName={"Krzysztof"} lastName={"Malec"}/>
    <MainDescription jobPosition={"Programista"} home={"Limanowa"} desc={"Młody programista"}/>
</>

    return content;
    
}

export default App;