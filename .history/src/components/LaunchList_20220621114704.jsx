import { useState, useEffect } from "react";
import { Heading, Flex, Stack, Input } from "@chakra-ui/react";

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

    <Flex align="center">
      <Stack spacing={6}>
        <Input variant='filled' placeholder='Filled' width={500} />
      </Stack>
    </Flex>

      <input
        type="text"
        placeholder="Search mission name..."
        onChange={(e) => filter(e.target.value)}
      />

      {launches.length === 0 ? (
        <div>Loading...</div>
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
