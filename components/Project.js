import React from "react";
import {
  Heading,
  Flex,
  Text,
  VStack,
  Img,
  HStack,
  Badge,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";


function Project({ projects }) {
  return (
    <VStack minH={"60vh"} px={10}>
      <Flex justify={"flex-start"}>
        <Heading>Projects</Heading>
      </Flex>
      <Flex justify={"flex-start"}>
        <Text>Here are the projects I&apos;ve worked on so far.</Text>
      </Flex>
      <Flex w="full" overflow="hidden" pos="relative">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {projects.map((data, id) => (
          <SwiperSlide key={id}>
            <Box w="70vw" boxSize="full" shadow="md" flex="none">
            <PCard
              image={data.image}
              caption={data.caption}
              description={data.description}
              category={data.categories}
            />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      </Flex>
    </VStack>
  );
}

const PCard = ({ image, caption, description, category }) => {
  return (
    <Stack direction={{ base: "column", md: "row" }} p={4} mx={10}>
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        p={8}
        maxW={"320px"}
        justify={"space-around"}
      >
        <VStack>
          <Img
            src={image}
            alt={caption}
            objectFit="cover"
            boxSize="100%"
            borderRadius={"lg"}
          />
          <Heading>{caption}</Heading>
          <HStack>
            {category.map((data, id) => (
              <Badge
                key={id}
                variant="outline"
                colorScheme={
                  data === "react"
                    ? "facebook"
                    : data === "js"
                    ? "twitter"
                    : data === "ts"
                    ? "telegram"
                    : data === "swift"
                    ? "cyan"
                    : "purple"
                }
              >
                #{data}
              </Badge>
            ))}
          </HStack>
        </VStack>
      </Flex>
      <Flex
        pr={{ md: 4 }}
        align={"center"}
        justify={"center"}
        px={8}
        maxW={"480px"}
      >
        <Text>{description}</Text>
      </Flex>
    </Stack>
  );
};

export default Project;
