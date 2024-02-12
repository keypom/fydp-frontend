import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { NavLink, useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import myData from "../data/db.json";
import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

//props validation
Gallery.propTypes = {
  isSecondary: PropTypes.bool,
};

export default function Gallery(props) {
  const allEvents = useLoaderData().events;
  const [events, setEvents] = useState(allEvents);
  const isSecondary = props.isSecondary || false;
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

  //search value
  const [searchPhrase, setSearchPhrase] = useState("");
  const handleChange = (changeEvent) => {
    setSearchPhrase(changeEvent.target.value);
    const matchedEvents = allEvents.filter((event) => {
      return event.title
        .toLowerCase()
        .includes(changeEvent.target.value.toLowerCase());
    });
    setEvents(matchedEvents);
  };

  const sortById = () => {
    if (sorted.sorted == "id") {
      setSorted({ sorted: "id", reversed: !sorted.reversed });
    } else {
      setSorted({ sorted: "id", reversed: false });
    }
    const eventsCopy = [...events];
    eventsCopy.sort((eventA, eventB) => {
      if (sorted.reversed) {
        return eventA.id - eventB.id;
      }
      return eventB.id - eventA.id;
    });
    setEvents(eventsCopy);
  };

  const sortByTitle = () => {
    if (sorted.sorted == "title") {
      setSorted({ sorted: "title", reversed: !sorted.reversed });
    } else {
      setSorted({ sorted: "title", reversed: false });
    }
    const eventsCopy = [...events];
    eventsCopy.sort((eventA, eventB) => {
      if (sorted.reversed) {
        return eventA.title.localeCompare(eventB.title);
      }
      return eventB.title.localeCompare(eventA.title);
    });
    setEvents(eventsCopy);
  };

  const RenderArrow = () => {
    if (sorted.reversed) {
      return <ArrowUpIcon />;
    }
    return <ArrowDownIcon />;
  };

  const sortByDate = () => {
    if (sorted.sorted == "date") {
      setSorted({ sorted: "date", reversed: !sorted.reversed });
    } else {
      setSorted({ sorted: "date", reversed: false });
    }
    const eventsCopy = [...events];
    eventsCopy.sort((eventA, eventB) => {
      if (sorted.reversed) {
        return eventA.date.localeCompare(eventB.date);
      }
      return eventB.date.localeCompare(eventA.date);
    });
    setEvents(eventsCopy);
  };

  return (
    <Box p="10">
      {isSecondary ? (
        <Heading as="h1"> Secondary Market</Heading>
      ) : (
        <Heading as="h1"> Gallery</Heading>
      )}
      <Divider my="5" bg="black" />

      <Input
        value={searchPhrase}
        onChange={handleChange}
        placeholder="search"
        size="md"
      />

      <Button onClick={sortByDate}>
        {sorted.sorted == "date" ? RenderArrow() : null}
        Sort by Date
      </Button>
      <Button onClick={sortByTitle}>
        {sorted.sorted == "title" ? RenderArrow() : null}
        Sort by Title
      </Button>
      <Button onClick={sortById}>
        {sorted.sorted == "id" ? RenderArrow() : null}
        Sort by Id
      </Button>
      <Divider my="5" bg="black" />
      <SimpleGrid spacing={10} minChildWidth="300px">
        {events &&
          events.map((event) => (
            <Card key={event.id} bg="white">
              <NavLink to={"../gallery/" + event.id}>
                <CardHeader>
                  <Image src={event.img} alt={event.title} />
                </CardHeader>
                <CardBody color="black">
                  <Heading as="h2" size="sm">
                    {event.title}
                  </Heading>
                  <Text color="green">${event.price}</Text>
                  <Text>Event on {event.date}</Text>
                </CardBody>
                <CardFooter>
                  <Text>Event in {event.location}</Text>
                </CardFooter>
              </NavLink>
            </Card>
          ))}
      </SimpleGrid>
    </Box>
  );
}

export const eventsLoader = async () => {
  // const res = await fetch("http://localhost:3000/events");

  return myData;
};
