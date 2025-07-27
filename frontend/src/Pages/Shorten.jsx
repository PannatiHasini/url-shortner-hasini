// import {Button, Container, TextInput} from '@mantine/core';
// import React,{useState} from 'react';
// import Service from '../utils/http';
// import Response from '../Components/PrivateRoute/Response';

// const service = new Service();


// export default function UrlShortener() {


//    const generateShortUrl = async () => {
//        console.log(input?.originalUrl);
//        try {
//            const data = await service.post("s", input);
//            setResponse(data);
//            console.log(data);
//        } catch (error) {
//            console.error("Error generating short URL:", error);
//        }
//    }


//    const [input, setInput] = useState({
//        originalUrl: "",
//        customUrl: "",
//        expiresAt: "",
//        title: ""
//    });


//    const [response, setResponse] = useState(null);


//    return (
//        <Container size={"xs"}>


//            {!response?
//            <>
//                URL Shortener
//                <TextInput
//                    size="lg"
//                    label="Original Url "
//                    withAsterisk
//                    placeholder="Input placeholder"
//                    onChange={(e) => { setInput({ ...input, originalUrl: e.target.value }) }}
//                />
//                <TextInput
//                    size="lg"
//                    label="Custom Url "
//                    placeholder="Input placeholder"
//                    onChange={(e) => { setInput({ ...input, customUrl: e.target.value }) }}
//                />
//                <TextInput
//                    size="lg"
//                    label="Title"
//                    placeholder="Input placeholder"
//                    onChange={(e) => { setInput({ ...input, title: e.target.value }) }}
//                />
//                <TextInput
//                    size="lg"
//                    type='date'
//                    label="expiresAt"
//                    placeholder="Input placeholder"
//                    onChange={(e) => { setInput({ ...input, expiresAt: e.target.value }) }}
//                />
//                <Button
//                    onClick={generateShortUrl}
//                    variant="outline"
//                    color="cyan"
//                    size="lg"
//                    radius="lg">
//                    Button
//                </Button>;
//            </>
//            :
//            <Response response={response} setResponse={setResponse}/>
//            }
//        </Container>
//    )
// }



import { Center, Container, Stack, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { Button } from '@mantine/core';
import Service from '../utils/http';
import { useState } from 'react';
import Response from '../Components/PrivateRoute/Response';


const service = new Service();

export default function Shorten() {
    const generateurl = async() =>{
        console.log(Input.originalUrl);
        try{
                const data = await service.post("s",Input);
                setResponse(data);
                console.log(data);
        }
        catch(error){
            console.error("Error generating URL:", error);
        }
        
    }
    const [Input, setInput] = useState({
        originalUrl : "",
        customUrl :"",
        expiresAt :"",
        title : "",
    });
    

   const [response, setResponse] = useState(null);

    return (
        <Container>
            {!response?
           <>
            <Stack k h={100} bg="var(--mantine-color-body)" align="stretch" justify="center" gap="lg"></Stack>

            <Center><TextInput label="Original URL" withAsterisk placeholder="Paste original URL" size = "lg" onChange={(e) => { setInput({ ...Input, originalUrl: e.target.value }) }}/></Center>
            <br></br>
            <Center><TextInput label="Customize URL(Optional) " placeholder="customize your URL"size = "lg"onChange={(e) => { setInput({ ...Input, customUrl: e.target.value }) }}/></Center>
            <br></br>
            <Center><TextInput label="Title(Optional) " placeholder="title of URL"size = "lg" onChange={(e) => { setInput({ ...Input, title : e.target.value }) }}/></Center>
            <br></br>
            <Center><DateInput valueFormat="YYYY MMM DD" label="Date input" placeholder="Date input" size = "lg" onChange={(e) => { setInput({ ...Input, expiresAt : e.target.value }) }}/></Center>
            <br></br>
            <Center><Button variant="outline" onClick={generateurl} size="md" radius="md">Generate URL </Button></Center>
             </>
           :
           <Response response={response} setResponse={setResponse}/>
           }


        </Container>
    )
}