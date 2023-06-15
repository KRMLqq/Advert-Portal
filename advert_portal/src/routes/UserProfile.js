import React from 'react';
import '../styles/userProfile.css';

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

function UserProfileList({List, about})
{
    const list = List.map(element => <li>{element}</li>) 
    return <><p>{about}: </p> <ul>{list}</ul></>;
}

function App()
{
    const content = <>
        <div><Logo source={"./logo2.png"} altText={"test"}/></div>
        <Name firstName={"Krzysztof"} lastName={"Malec"}/>
        <MainDescription jobPosition={"Programista"} home={"Limanowa"} desc={"Młody programista"}/>
        <ContactDetails email={"asd@gmail.com"} phoneNumber={"123456789"} dateOfBirth={"12.12.1912"}/>
        <Experience text={"Mam duże doświadczenie"} />
        <UserProfileList List={["Zstio", "AGH"]} about={"Wykształcenie"} />
        <UserProfileList List={["Polski", "Angielski"]} about={"Języki"} />
        <UserProfileList List={["Programowanie w React", "Programowanie w C#"]} about={"Umiejętności"} />
        <UserProfileList List={["Certyfikat CISCO", "Kurs na Udemy"]} about={"Certyfikaty"}/>
        <UserProfileList List={["github.com", "useme.com"]} about={"Linki"}/>
    </>

    return content;
    
}

export default App;