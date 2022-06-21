import { useState, useEffect } from "react";
import { Heading, Stack, Input } from "@chakra-ui/react";

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

      <Stack spacing={4}>
  <Input variant='outline' placeholder='Outline' />
  <Input variant='filled' placeholder='Filled' />
  <Input variant='flushed' placeholder='Flushed' />
  <Input variant='unstyled' placeholder='Unstyled' />
</Stack>
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
