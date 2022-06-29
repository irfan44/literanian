import { Center, HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FaFirefoxBrowser, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  const socialMedia = [
    {
      icon: FaFirefoxBrowser,
      name: "Generasi Gigih",
      url: "https://www.anakbangsabisa.org/generasi-gigih/",
    },
    {
      icon: FaInstagram,
      name: "Yayasan Anak Bangsa Bisa",
      url: "https://www.instagram.com/yayasan.anakbangsabisa/",
    },
    {
      icon: FaYoutube,
      name: "Yayasan Anak Bangsa Bisa",
      url: "https://www.youtube.com/c/YayasanAnakBangsaBisa",
    },
  ];

  return (
    <Stack spacing={4}>
      <Text fontWeight="medium">Media sosial :</Text>
      {socialMedia.map((socials) => {
        return (
          <HStack key={socials.url} as={Link} href={socials.url} isExternal>
            <Center p="2" bg="#2447F9" borderRadius="full" color="white">
              <Icon as={socials.icon} />
            </Center>
            <Text>{socials.name}</Text>
          </HStack>
        );
      })}
    </Stack>
  );
};

export default SocialMedia;
