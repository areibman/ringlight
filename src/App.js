import React, { useEffect } from "react";
import styled from "styled-components";
import Webcam from "react-webcam";
import Draggable from "react-draggable";
import { CoffeeButton } from "./Buymeacoffee";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import { Fragment } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ClassicLight from "./ClassicLight";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { ThemeProvider, createTheme } from "@mui/core/styles";

const colorPallete = {
  Lumen: { main: "#FFFFFF", contrastText: "#4c4c4c" },
  "Blue Sky": { main: "#0099FE", contrastText: "#FFFFFF" },
  "Overcast Daylight ": { main: "#A0E6FE", contrastText: "#4c4c4c" },
  "Household Light": { main: "#FEFF67", contrastText: "#4c4c4c" },
  "Early Sunrise": { main: "#FFC900", contrastText: "#4c4c4c" },
  Tungsten: { main: "#FF9935", contrastText: "#4c4c4c" },
  "Candle Light": { main: "#FE3400", contrastText: "#4c4c4c" },
};
const theme = createTheme({
  palette: colorPallete,
});
// const theme = createTheme({
//   palette: {
//     neutral: {
//       main: "#FE3400",
//       contrastText: "#fff",
//     },
//   },
// });

const Container = styled.div`
  background-color: black;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: ${(props) => props.color};
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

const TipsBox = styled.div`
  /* visibility: ${(props) => (props.open ? "visible" : "hidden")}; */
  padding: 0 18px;
  border: solid 1px;
  transition: max-height 0.5s ease-out;
  max-height: ${(props) => (props.open ? "100%" : "0%")};
  opacity: ${(props) => (props.open ? "1" : "0")};
`;

const LightContainer = (props) => {
  return (
    <Fragment>
      <WhiteBox color={props.color} />
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

const Drawer = styled.div`
  width: 20em;
  height: 100%;
  position: absolute;
  display: flex;
  overflow: auto;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 2px 2px 10px grey;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.open ? "1" : "0")};
`;

const App = () => {
  const [ringtype, setRingtype] = React.useState("lightplus");
  const [color, setColor] = React.useState("white");
  const [webcamEnabled, setWebcamEnabled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [tipsOpen, setTipsOpen] = React.useState(false);

  const handleRingtypeChange = (event) => {
    setRingtype(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSwitch = () => {
    setWebcamEnabled(!webcamEnabled);
  };

  const toggleMenu = () => {
    setDrawerOpen(!drawerOpen);
  };

  const resetDrawer = () => {
    drawerOpen && setDrawerOpen(false);
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <DrawerButton onClick={toggleMenu}>
        <MenuIcon style={{ color: "gray" }} />
      </DrawerButton>
      <Drawer open={drawerOpen}>
        <Menu>
          <CoffeeButton />
          <div style={{ margin: "1em 0em" }}>Ringlight Type</div>
          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <RadioGroup
              aria-label="style"
              name="style1"
              value={ringtype}
              onChange={handleRingtypeChange}
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
                sx={{
                  color: "blue",
                  "&.Mui-checked": {
                    color: "blue",
                  },
                }}
              />
            </RadioGroup>
          </FormControl>
          <div style={{ margin: "1em 0em" }}>Color</div>
          <ThemeProvider theme={theme}>
            <Stack spacing={1}>
              {Object.entries(colorPallete).map((item, ndx) => {
                return (
                  <Button
                    key={ndx}
                    onClick={() => {
                      setColor(item[1].main);
                    }}
                    color={item[0]}
                    variant="contained"
                  >
                    {item[0]}
                  </Button>
                );
              })}
            </Stack>
          </ThemeProvider>
          <div style={{ margin: "1em 0em" }}>Enable Webcam</div>
          <Switch onChange={handleSwitch} />
          <Button
            variant="outlined"
            onClick={() => {
              setTipsOpen(!tipsOpen);
            }}
          >
            How To Use
          </Button>

          <TipsBox open={tipsOpen}>
            <ul>
              <li>Maximize your screen's brightness</li>
              <li>
                Keep eye contact with your physical Webcam. This is how you
                simulate eye contact with your subject.
              </li>
              <li>
                Minimize your virtual camera video and place it as close as
                possible to your physical Webcam as possible.
              </li>
            </ul>
          </TipsBox>

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
      <Container onClick={resetDrawer}>
        {ringtype === "lightplus" ? (
          <LightContainer color={color} />
        ) : (
          <ClassicLight color={color} />
        )}
      </Container>
    </Container>
  );
};

export default App;
