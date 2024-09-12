import { Image, Text, VStack } from "@chakra-ui/react";

type TSkillCardProps = {
  name: string;
  image: string;
  hasOddLast: boolean;
};
const SkillCard = ({ name, image, hasOddLast }: TSkillCardProps) => {
  return (
    <VStack
      key={name}
      sx={{
        ":last-of-type": {
          gridColumn: {
            base: hasOddLast ? "span 1" : "span 1",
            md: hasOddLast && "span 2/4",
          },
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
