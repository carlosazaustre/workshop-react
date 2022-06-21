import { useState, useEffect } from "react";
import { Heading, Text, Flex, Box, Input } from "@chakra-ui/react";

import { LaunchItem } from "./LaunchItem";
import * as API from "../services/launches";

export function LaunchList() {
  const [launches, setLaunches] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  const filter = (searchBy) => {
    setSearch(searchBy);
  }

  return (
    <>
      <Heading align="center" as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>

      <Text fontSize='3xl' ml="7">
        Search:
      </Text>
      <Flex align="center">
        <Input
          m={6}
          variant='filled' type="text"
          placeholder="Search mission name..."
          onChange={(e) => filter(e.target.value)} />
      </Flex>

      {launches.length === 0 ? (
        <Box fontSize='3xl' align="center" alignItems="center">Loading...</Box>
      ) : (
        <section>
          {
            launches.map((launch, flight_number) => {
              if (launch.mission_name.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <LaunchItem key={flight_number} launch={launch} />
                )
              }
            })
          }
        </section>
      )}
    </>
  );
}
