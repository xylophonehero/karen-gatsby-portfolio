import React from "react";
import { Box, Flex, Text, Stack, Collapse, useDisclosure } from "@chakra-ui/react";
import { Link } from 'gatsby'
import Logo from '../../static/logo.svg'

const NavBar = (props) =>
{
  const { isOpen, onToggle } = useDisclosure()

  return (
    <NavBarContainer {...props}>
      <Link
        to="/"
      >
        <Box w={["200px", "300px", "200px", "300px"]} h={["40px", "60px", "40px", "60px"]}>
          <img src={Logo} alt="logo" width="300px" />
        </Box>
      </Link>

      <MenuToggle toggle={onToggle} isOpen={isOpen} />
      <Box display={{ base: "none", md: "block" }} pr={[0, 0, 4, 16, 32]}>
        <MenuLinks />
      </Box>

      <MobileMenu isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      // fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  // fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) =>
{
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle} color="gray.700">
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) =>
{
  return (
    <Box as={Link} to={to} className="navbar-link" pos="relative">
      <Text display="block" fontFamily="heading" textTransform="uppercase" textDecor="none" color="gray.700" {...rest}>
        {children}
      </Text>
      <Box
        pos="absolute"
        h="2px"
        bgColor="gray.700"
        w="0"
        transition="width 0.3s ease"

        sx={{
          ".navbar-link:hover &": {
            width: "100%",
          },
        }}
      />
    </Box>
  );
};

const MobileMenu = ({ isOpen }) =>
{
  return (

    <Box
      display={{ base: "block", md: "none" }}
      pos="fixed"
      top={["56px", "76px"]}
      left="0"
      flexBasis="100%"
      bgGradient="linear(to-r, teal.100, teal.300)"
      w="full"
      py="2"
    >
      <Collapse in={isOpen} animateOpacity>
        <MenuLinks />
      </Collapse>
    </Box>
  )
}

const MenuLinks = () =>
{
  return (

    <Stack
      spacing={[4, 4, 4, 8, 16]}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "column", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/services">Services</MenuItem>
      <MenuItem to="/portfolio">Portfolio</MenuItem>
      <MenuItem to="/testimonials">Testimonials</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem>
    </Stack>

  );
};

const NavBarContainer = ({ children, ...props }) =>
{
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      pos="sticky"
      top="0"
      zIndex="2"
      // h={["72px", "96px", "72px", "96px"]}
      // zIndex="sticky"
      // mb={8}
      p={4}
      bgGradient="linear(to-r, teal.100, teal.300)"
      color="gray.600"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;