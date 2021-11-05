import React from 'react'
import './avatar-header.styles.scss'

const AvatarHeader = ({ imageUrl }) => {
  return <img className='avatar' src={imageUrl} alt='avatar' />
}

export default AvatarHeader
