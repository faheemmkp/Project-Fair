import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { GiLaptop } from "react-icons/gi";

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='fs-3 text-primary' style={{fontWeight:'bold'}}>
          <GiLaptop className='fs-1 m-4 text-dark'/>
            Project Fair
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header