import "./App.css";
import burger from "./burger.svg";
import logo from "./logo.svg";
import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import Webcam from "react-webcam";
import Draggable from "react-draggable";
import { CoffeeButton } from "./Buymeacoffee";
import Switch from "@material-ui/core/Switch";
import Radio from "@material-ui/core/Radio";
import { Fragment } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const Container = styled.span`
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RingOutter = styled.span`
  width: 50%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  background-color: white;
  border-radius: 50%;
  position: absolute;
  z-index: 0;
  box-shadow: 2px 2px 10px grey;
`;

const RingInner = styled.span`
  width: 40%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  background-color: black;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  box-shadow: 2px 2px 10px grey;
`;

const SpotlightRing = styled.span`
  background-color: black;
  border-radius: 75%;
  position: relative;
  width: 50%;
  z-index: 1;
  box-shadow: 2px 2px 10px grey;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const WhiteBox = styled.span`
  background-color: white;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
`;

const WebcamBox = styled.span`
  position: absolute;
  z-index: 2;
  box-shadow: 2px 2px 10px grey;
  border-radius: 10%;
  width: 10em;
  z-index: 4;
`;

const Camera = styled(Webcam)`
  width: 100%;
  border-radius: 10px;
  margin: -3px;
  z-index: 3;
`;

const LightContainer = () => {
  return (
    <Fragment>
      <WhiteBox />
      <SpotlightRing />
    </Fragment>
  );
};

const Menu = styled.span`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin: 1em;
`;

const DrawerButton = styled.div`
  width: 4em;
  height: 2.5em;
  display: flex;
  align-content: center;
  position: absolute;
  z-index: 10;
  top: 40px;
  left: 40px;
`;

const App = () => {
  const [value, setValue] = React.useState("lightplus");
  const [webcamEnabled, setWebcamEnabled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSwitch = () => {
    setWebcamEnabled(!webcamEnabled);
  };

  const toggleMenu = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <DrawerButton onClick={toggleMenu}>
        <MenuIcon style={{ color: "gray" }} />
      </DrawerButton>
      <Drawer anchor={"left"} open={drawerOpen} style={{ maxWidth: "15%" }}>
        <Menu>
          Ringlight Type
          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <RadioGroup
              aria-label="style"
              name="style1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="lightplus"
                control={<Radio />}
                label="LightPlus"
              />
              <FormControlLabel
                value="classic"
                control={<Radio />}
                label="Classic"
              />
            </RadioGroup>
          </FormControl>
          Enable Webcam
          <Switch onChange={handleSwitch} />
          <p style={{ maxWidth: "15em" }}>
            Thanks for using Ringlight! Tips:
            <ul>
              <li>Maximize your screen's brightness</li>
              <li>Try to maintain eye contact with your physical Webcam.</li>
              <li>
                Drag your virtual camera as close as possible to your physical
                Webcam
              </li>
            </ul>
          </p>
          <CoffeeButton />
          <Button
            variant="contained"
            onClick={toggleMenu}
            style={{ width: "40%", marginTop: "1em" }}
          >
            Close
          </Button>
        </Menu>
      </Drawer>
      {webcamEnabled && (
        <Draggable handle=".handle" position={null} scale={1}>
          <WebcamBox>
            <span className="handle">
              <Camera />
            </span>
          </WebcamBox>
        </Draggable>
      )}
      {value === "lightplus" ? (
        <LightContainer />
      ) : (
        <Fragment>
          <RingOutter />
          <RingInner />
        </Fragment>
      )}
    </Container>
  );
};

export default App;
