import { Avatar , Center, Text} from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Service from '../utils/http';

const service = new Service();

export default function Profile() {
    const [profileData,setProfileData] = useState(null);
    async function getProfileData(){
        let data = await service.get("user/me");
        setProfileData(data);
        console.log(data);
    }
    useEffect(()=>{
        getProfileData();
    },[])
    return (
        <div>
            <Center><Avatar src={profileData?.avatar} alt="it's me" size="xl" variant="transparent"/></Center>
            <Text ta="center" ><strong>Name : </strong>{profileData?.name}</Text>
            <Text ta="center"><strong>Email Id :</strong>{profileData?.email}</Text>
            <Text ta="center"><strong>User Id :</strong>{profileData?._id}</Text>
            <Text ta="center"><strong>Created On :</strong>{profileData?.createdAt}</Text>



        </div>
    )
}
