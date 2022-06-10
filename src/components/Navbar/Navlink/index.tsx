import { Link, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navlink = () => {
  const Links = [
    {
      name: "Beranda",
      to: "/",
    },
    {
      name: "Beranda",
      to: "/",
    },
    {
      name: "Beranda",
      to: "/",
    },
    {
      name: "Beranda",
      to: "/",
    },
  ];

  return (
    <Stack direction={["column", "row"]} spacing="4">
      {Links.map(({ name, to }) => {
        return (
          <Link
            as={RouterLink}
            to={to}
            key={name}
            _hover={{ textDecor: "none" }}
          >
            {name}
          </Link>
        );
      })}
    </Stack>
  );
};

export default Navlink;
