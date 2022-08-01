import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import {
  Heading,
  Flex,
  Text,
  VStack,
  SimpleGrid,
  Badge,
  Stack,
  Link,
  HStack,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function Project({ projects }) {
  return (
    <VStack p={{ base: 4, md: 6, lg: 8 }} spacing={5}>
      <Flex justify={"flex-start"} px={{ lg: 10 }} id="projects" w="full">
        <Heading>Projects</Heading>
      </Flex>
      <Flex justify={"flex-start"} px={{ lg: 10 }} w="full">
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
                p={{ base: 2, md: 4, lg: 8 }}
              >
                <PCard
                  image={data.image}
                  caption={data.caption}
                  description={data.description}
                  category={data.categories}
                  link={data.link}
                />
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </VStack>
  );
}

const PCard = ({ image, caption, description, category, link }) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      p={4}
      py={{ sm: 4, md: 4 }}
      mx={{ md: 10 }}
    >
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        minW={"320px"}
        justify={"space-around"}
      >
        <VStack>
          <Image src={image} alt={caption} width={400} height={300} />
          <Heading>{caption}</Heading>
          <SimpleGrid columns={2} spacing={{ base: 2, md: 4 }}>
            {category.map((data, id) => (
              <Badge
                key={id}
                variant="outline"
                colorScheme={
                  data === "React"
                    ? "facebook"
                    : data === "TailwindCSS"
                    ? "teal"
                    : data === "TS"
                    ? "telegram"
                    : data === "NextJS"
                    ? "cyan"
                    : data === "React-Query"
                    ? "red"
                    : data === "Redux-Toolkit"
                    ? "orange"
                    : "purple"
                }
              >
                #{data}
              </Badge>
            ))}
          </SimpleGrid>
        </VStack>
      </Flex>
      <Flex
        pr={{ md: 4 }}
        align={"center"}
        justify={"center"}
        px={8}
        maxW={"480px"}
      >
        <Text>
          {description}{" "}
          <NextLink href={link} passHref>
            <Link isExternal>View Demo here.</Link>
          </NextLink>
        </Text>
      </Flex>
    </Stack>
  );
};

export default Project;
