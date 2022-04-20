import { Flex, Image, Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

// Components
import { LaunchList } from "./components/LaunchList";
import { LaunchDetails } from "./components/LaunchDetails";
import { RocketDetails } from "./components/RocketDetails";
import { DarkMode } from "./components/DarkMode";

// Assets
import logo from "./assets/logo-spacex.png";

export function App() {
  return (
    <>
      <Flex m={4} direction="row" justify="space-between" align="center" >
        <Box>
          <Image src={logo} width={300} />
        </Box>
        <Box>
          <DarkMode />
        </Box>
      </Flex>
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  );
}
