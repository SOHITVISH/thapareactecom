import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from "./Nav"

const Header =()=>{ 
return (
     <MainHeader>

<NavLink to ="/">

      <img src= "./images/logo.png"  py-4  alt= "my logo img" />

</NavLink>
<Nav/>
</MainHeader>

);

};

const MainHeader = styled.header`
padding 0 4.8rem;
height:10rem;

display:flex;
justify-content:space-between;
align-item:center;
position:relative


.logo{

    height:5remp;
}`;
 

export default Header;