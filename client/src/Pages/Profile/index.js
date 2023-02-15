import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {Text} from "@chakra-ui/react"

function Profile() {

    const {user}=useAuth();
  return (
    <div>
  
    <code>

    <Text fontSize="22">Profile</Text>
    {JSON.stringify(user)}

    </code>


    </div>
  )
}

export default Profile