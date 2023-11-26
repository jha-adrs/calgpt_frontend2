import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const UserAvatar = (props) => {
  return (
    <Avatar size="icon" {...props} >
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" {...props} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
