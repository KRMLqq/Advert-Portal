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

function ContactDetails({email, phoneNumber, dateOfBirth})
{
    const details = <>
        <p>E-mail: {email}</p>
        <p>Number telefonu: {phoneNumber}</p>
        <p>Data Urodzenia: {dateOfBirth}</p>
    </>

    return details;
}

function Experience({text})
{
    return <p>{text}</p>;
}

function App()
{
    const content = <>
    <Logo source={"logo2.png"} altText={"test"}/>
    <Name firstName={"Krzysztof"} lastName={"Malec"}/>
    <MainDescription jobPosition={"Programista"} home={"Limanowa"} desc={"Młody programista"}/>
    <ContactDetails email={"asd@gmail.com"} phoneNumber={"123456789"} dateOfBirth={"12.12.1912"}/>
    <Experience text={"Mam duże doświadczenie"}/>
</>

    return content;
    
}

export default App;