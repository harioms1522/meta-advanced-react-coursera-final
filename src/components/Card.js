import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor={"white"}
      color="black"
      alignItems="flex-start"
      padding="14px"
      borderRadius="8px"
    >
      <Image src={imageSrc} />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <a href="#"><Text>See More <FontAwesomeIcon icon={faArrowRight} size="1x"/></Text></a>
    </VStack>
  )
};

export default Card;
