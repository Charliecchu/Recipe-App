import React from 'react';
import { Link } from 'react-router-dom';
import KitchenIcon from '@mui/icons-material/Kitchen'; 
import "../App.css";
import styled from 'styled-components';


const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
    <StyledLogo>
        <LogoLink to = "/">
            <div className="textEdit" id="appName">
            <KitchenIcon fontSize="large"/><span>FindMyMeal</span>
            </div> 
        </LogoLink>
    </StyledLogo>
    </Link>
  );
};

export default Logo;


const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  flex-grow: 0; // do not allow it to grow
  flex-shrink: 0; // do not allow it to shrink
`;