import React from 'react'

const NavButton = ({ reverseBars, onClick }) => {
  return (
    <div
      onClick={() => onClick()} 
      style={{
        display: 'flex',
        flexDirection: reverseBars ? 'row-reverse' : 'row',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 40,
        zIndex: 99
      }}>
      <div
        style={{
          marginRight: 8,
          marginLeft: 8,
          borderRadius: 15,
          backgroundColor: '#fff',
          width: 2,
          height: 64,
        }}
      />
      <div
        style={{
          backgroundColor: '#fff',
          width: 2,
          height: 32,
          borderRadius: 15,
        }}
      />
    </div>
  )
}

export default NavButton;