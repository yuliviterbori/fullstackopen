import React from 'react'

const Notification = ({message, isGood}) => {
if(message === null){
    return null
}
const classNameN = isGood ? 'goodNotification' : 'badNotification';  
return (
    <div className={classNameN}>{message}</div>
  )
}

export default Notification