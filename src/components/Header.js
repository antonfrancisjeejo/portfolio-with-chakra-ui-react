import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      {isNotSmallerScreen && (
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
      )}
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : 0}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? 0 : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Anton Francis Jeejo
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Mentor, Developer at Techieegy. Mentor by Day and Freelancer by
            Night. Youtuber for students
          </Text>
          <Button mt={8} colorScheme="blue">
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://pbs.twimg.com/profile_images/1292721383546318850/KU8pErTW_400x400.jpg"
          zIndex={1}
        />
      </Flex>
    </Stack>
  );
};

export default Header;
