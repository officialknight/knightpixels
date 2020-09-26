import React, { Component } from 'react'
import './Navbar.css';
import SiteName from './SiteName';
import NavComps from './NavComps';
function Navbar(){
    return(<div className="NavBar">
    <div >
    <SiteName /> </div>
  <div className="Navbaritems"> 
    <NavComps text="Movies" />
    <NavComps text="TV Shows"/>
    <NavComps text="Games"/>    
    <NavComps text="Linux"/> 
    </div> 
    
    
    </div>)
        
    

}
export default Navbar
function Navtopage()
{

}