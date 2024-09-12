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
          <Flex gap="2" align="center">
            <Link isExternal href={githubUrl}>
              View Code
            </Link>
            <GithubIcon />{" "}
          </Flex>
        )}

        {liveUrl && (
          <Flex gap="2" align="center">
            <Link isExternal href={liveUrl}>
              View Live
            </Link>
            <ExtLinkIcon />{" "}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
