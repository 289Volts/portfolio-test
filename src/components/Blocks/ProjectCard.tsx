import { Badge, Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import ExtLinkIcon from "../Icons/ExtLinkIcon";
import GithubIcon from "../Icons/GithubIcon";

type TProjectCardProps = {
  title: string;
  description: string;
  image: string;

  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};
const ProjectCard = ({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
}: TProjectCardProps) => {
  return (
    <Flex
      direction="column"
      p="4"
      bg="white"
      border="1px solid #E2E8F0"
      borderRadius="md"
      shadow="sm"
      gap="4"
      w="fit-content"
      sx={{
        ":last-of-type": {
          gridColumn: { base: "span 1", xl: "2/3" },
        },
      }}
    >
      <Box>
        <Image
          src={image}
          alt=""
          // aspectRatio={{ base: "4/3", md: "16/9" }}
        />
      </Box>

      <Stack gap="1">
        <Text fontWeight="bold" fontSize={{ base: "xl", md: "xl" }}>
          {title}
        </Text>
        <Text>{description}</Text>
      </Stack>
      <Stack direction="row" flexWrap={"wrap"} gap="2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </Stack>
      <Flex align="center" justify="space-between" fontWeight="medium">
        {githubUrl && (
          <Link
            border="1px solid black"
            display="flex"
            alignItems="center"
            fontWeight="bold"
            gap="2"
            px="2"
            py="1"
            rounded="full"
            isExternal
            href={githubUrl}
          >
            View Code <GithubIcon />{" "}
          </Link>
        )}

        {liveUrl && (
          <Link
            border="1px solid black"
            display="flex"
            alignItems="center"
            fontWeight="semibold"
            _hover={{
              bg: { md: "#0000000a" },
              border: { md: "1px solid #0000000a" },
            }}
            px="2"
            py="1"
            gap="1"
            rounded="full"
            isExternal
            href={liveUrl}
          >
            View Live
            <ExtLinkIcon />
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
