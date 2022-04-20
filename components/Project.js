import React, { useState } from "react";
import {
  Heading,
  Flex,
  Text,
  VStack,
  Img,
  HStack,
  Badge,
  Stack,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const MButton = motion(IconButton);
const MFlex = motion(Flex);

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    caption: " web application",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invi dunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    categories: ["js", "ts", "swift", "flutter"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    caption: " web application",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invi dunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    categories: ["js", "ts", "swift"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    caption: " web application",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invi dunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    categories: ["js", "ts", "swift"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    caption: " web application",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invi dunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    categories: ["js", "ts", "swift"],
  },
];

function Project() {
  const [slide, setSlide] = useState(0);

  const slidesCount = projects.length;

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? slidesCount - 1 : slide - 1));
  };

  const nextSlide = () => {
    setSlide((slide) => (slide === slidesCount - 1 ? 0 : slide + 1));
  };
 
  const setCurrentSlide = (s) => {
    setSlide(s);
  };

  
  return (
    <VStack minH={"60vh"} px={10}>
      <Flex justify={"flex-start"}>
        <Heading>Projects</Heading>
      </Flex>
      <Flex justify={"flex-start"}>
        <Text>Here are the projects I&apos;ve worked on so far.</Text>
      </Flex>
      <Flex w="full" overflow="hidden" pos="relative">
        <AnimatePresence initial={false}>
          <MFlex
            w="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, translateX: `-${slide * 100}%` }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, translateY: `-${slide * 100}%` }}
          >
            {projects.map((data, id) => (
              <Box key={`slide-${id}`} boxSize="full" shadow="md" flex="none">
                <PCard
                  image={data.image}
                  caption={data.caption}
                  description={data.description}
                  category={data.categories}
                />
              </Box>
            ))}
          </MFlex>
        </AnimatePresence>
      </Flex>
      <HStack justify="center"  mt={4} w="full">
      {Array.from({ length: slidesCount }).map((_, data) => (
            <Box
              key={`dots-${data}`}
              cursor="pointer"
              boxSize={["7px", , "15px"]}
              bg={slide === data ? "gray.700" : "gray.200"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setCurrentSlide(data)}
            ></Box>
          ))}
        </HStack>
      <HStack spacing={6}>
        <CarouselButton
          label={"prevSlide"}
          icon={<AiOutlineArrowLeft />}
          onClick={prevSlide}
        />
        <CarouselButton
          label={"nextSlide"}
          icon={<AiOutlineArrowRight />}
          onClick={nextSlide}
        />
      </HStack>
    </VStack>
  );
}

const PCard = ({ image, caption, description, category }) => {
  return (
    <Stack direction={{ base: "column", md: "row" }} p={4}>
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

const CarouselButton = ({ icon, label, ...rest }) => {
  return (
    <MButton
      aria-label={label}
      icon={icon}
      as={"a"}
      borderRadius={"full"}
      variant={"ghost"}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      {...rest}
    />
  );
};

export default Project;
