import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

type TMobileNavMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNavMenu = ({ isOpen, onClose }: TMobileNavMenuProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton top="13px" right="4" size="lg" />
        <DrawerHeader>
          <Logo />
        </DrawerHeader>

        <DrawerBody>
          <NavLinks onClose={onClose} />
        </DrawerBody>

        {/* <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavMenu;
