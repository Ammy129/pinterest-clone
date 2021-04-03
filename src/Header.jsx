import React, { useState } from "react";
import styled from "styled-components";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { Link, NavLink, useHistory } from "react-router-dom";

const Header = ({ setSearch }) => {
  const [value, setValue] = useState("");
  const history = useHistory();

  const submitted = e => {
    e.preventDefault();
    setSearch(value);
    history.push("/");
  };

  return (
    <Wrapper>
      <Link to="/">
        <Logo>
          <PinterestIcon />
        </Logo>
      </Link>

      <HomeButtonForMobile>
        <option value="home">Home</option>
        <option value="today">Today</option>
      </HomeButtonForMobile>

      <NavLink to="/" exact activeClassName="active-nav">
        <HomeButton>Home</HomeButton>
      </NavLink>
      <TodayButton>Today</TodayButton>

      <Form onSubmit={submitted}>
        <Button type="submit">
          <SearchIcon />
        </Button>
        <input
          type="text"
          placeholder="Search"
          onChange={e => setValue(e.target.value)}
        />
      </Form>

      <IconContainer>
        <Button>
          <NotificationsIcon />
        </Button>
        <Button>
          <ChatIcon />
        </Button>
        <Button className="account">
          <AccountCircleIcon />
        </Button>
        <Button>
          <ExpandMoreRoundedIcon />
        </Button>
      </IconContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  svg {
    color: #e50123;
  }
  a:focus {
    outline: none;
  }
  a {
    text-decoration: none;
    display: block;
    color: white;
  }
`;

const Logo = styled.figure`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;

  :hover {
    background: #efefef;
  }
`;
const Button = styled.button`
  padding: 0.8rem 1rem;
  border-radius: 2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  background: none;
  :focus {
    outline: none;
  }
`;

const HomeButton = styled(Button)`
  @media screen and (max-width: 657px) {
    display: none;
  }
`;
const TodayButton = styled(Button)`
  :hover {
    background: #efefef;
  }
  @media screen and (max-width: 657px) {
    display: none;
  }
`;

const HomeButtonForMobile = styled.select`
  display: none;
  padding: 0.8rem 1rem;
  border-radius: 2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  background: none;
  :focus {
    outline: none;
    background: #111;
    color: #fff;
  }

  @media screen and (max-width: 657px) {
    display: block;
  }
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;

  :focus-within {
    box-shadow: 0 0 0 4px lightblue;
    border-radius: 1.8rem;
  }

  button {
    background: #efefef;
    border-radius: 2rem 0 0 2rem;
  }
  svg {
    color: #767676;
  }

  input {
    width: 100%;
    padding: 1.1rem 0;
    font-size: 1rem;
    color: #111;
    background: #efefef;
    border: none;
    border-radius: 0 2rem 2rem 0;
    :focus {
      outline: none;
    }
  }
  @media screen and (max-width: 509px) {
    /* min-width: 183px; */

    input {
      padding: 1.1rem 0;
    }
    button {
      padding: none;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  button {
    padding: 0.5rem;
    :hover {
      background: #efefef;
    }
  }
  svg {
    color: #767676;
  }

  @media screen and (max-width: 509px) {
    button {
      display: none;
    }
  }
`;

export default Header;
