import { Image, Text, VStack } from "@chakra-ui/react";

type TSkillCardProps = {
  name: string;
  image: string;
};
const SkillCard = ({ name, image }: TSkillCardProps) => {
  return (
    <VStack
      key={name}
      sx={{
        ":last-of-type": {
          gridColumn: { base: "span 1", md: "span 4" },
        },
      }}
      textAlign="center"
    >
      <Image src={image} alt="" w="60px" />
      <Text fontWeight="medium">{name}</Text>
    </VStack>
  );
};

export default SkillCard;
