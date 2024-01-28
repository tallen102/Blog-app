import React from "react";
import { VStack, Link, Tooltip, Box } from "@chakra-ui/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

const Mail = () => {
  return (
    <Tooltip
      hasArrow
      label={"Mail"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        display="flex"
        to={"/Mail"} 
        as={RouterLink}
        alignItems="center"
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <MdOutlineMailOutline size={25} />
        <Box display={{ base: "none", md: "block" }}>Mail</Box>
      </Link>
    </Tooltip>
  );
};

export default Mail;
