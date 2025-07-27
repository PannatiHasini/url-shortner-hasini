import { Center, Stack, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { Button } from '@mantine/core';


export default function Shorten() {
      
    return (
        <div>
            <Stack k h={100} bg="var(--mantine-color-body)" align="stretch" justify="center" gap="lg"></Stack>

            <Center><TextInput label="Original URL" withAsterisk placeholder="Paste original URL" size = "lg"/></Center>
            <br></br>
            <Center><TextInput label="Customize URL(Optional) " placeholder="customize your URL"size = "lg"/></Center>
            <br></br>
            <Center><TextInput label="Title(Optional) " placeholder="title of URL"size = "lg"/></Center>
            <br></br>
            <Center><DateInput valueFormat="YYYY MMM DD" label="Date input" placeholder="Date input" size = "lg" /></Center>
            <br></br>
            <Center><Button variant="outline" size="md" radius="md">Generate URL </Button></Center>

        </div>
    )
}