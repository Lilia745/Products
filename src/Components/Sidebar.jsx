import React, { useContext } from 'react'
import { SidebarContext } from '../Contexts/SidebarContext'

function Sidebar() {
    const {isOpen,handleClose} = useContext(SidebarContext)
  return (
    <div className='sideBar'>Sidebar</div>
  )
}

export default Sidebar