import { Badge, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import ExtLinkIcon from "../Icons/ExtLinkIcon";
import GithubIcon from "../Icons/GithubIcon";

const ProjectCard = () => {
  return (
    <Flex direction="column">
      <Image src="" alt="" w="60px" />
      <Text>Text</Text>
      <Stack direction="row">
        <Badge>Default</Badge>
        <Badge colorScheme="green">Success</Badge>
        <Badge colorScheme="red">Removed</Badge>
        <Badge colorScheme="purple">New</Badge>
      </Stack>
      <Flex align="center" justify="space-between" fontWeight="medium">
        <Flex gap="2" align="center">
          <GithubIcon /> <Link href="#">View Code</Link>
        </Flex>

        <Flex gap="2" align="center">
          <ExtLinkIcon /> <Link href="#">View Live</Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
