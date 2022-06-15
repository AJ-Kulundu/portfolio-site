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
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function Project({ projects }) {
  return (
    <VStack minH={"60vh"} px={10} >
      <Flex justify={"flex-start"} id="projects">
        <Heading>Projects</Heading>
      </Flex>
      <Flex justify={"flex-start"}>
        <Text>Here are the projects I&apos;ve worked on so far.</Text>
      </Flex>
      <Flex w="full" overflow="hidden" pos="relative">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {projects.map((data, id) => (
            <SwiperSlide key={id}>
              <Flex
                w="full"
                boxSize="full"
                flex="none"
                p={4}
              >
                <PCard
                  image={data.image}
                  caption={data.caption}
                  description={data.description}
                  category={data.categories}
                />
              </Flex>
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
        p={6}
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
