import {
  Box,
  Divider,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";
import NextImage from "next/image";
import NextLink from "next/link";
import {
  MdFavorite,
  MdHome,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdSearch,
} from "react-icons/md";

const SideBar = () => {
  const menu = [
    {
      name: "Home",
      icon: MdHome,
      route: "/",
    },
    {
      name: "Search",
      icon: MdSearch,
      route: "/search",
    },
    {
      name: "Your Library",
      icon: MdLibraryMusic,
      route: "/library",
    },
  ];
  const musicMenu = [
    {
      name: "Create Playlist",
      icon: MdPlaylistAdd,
      route: "/",
    },
    {
      name: "Favorites",
      icon: MdFavorite,
      route: "/favorites",
    },
  ];
  const playLists = new Array(30).fill(1).map((_, i) => `playList ${i + 1}`);
  return (
    <Box
      width="100%"
      paddingX="5px"
      height="calc(100vh - 100px)"
      bg="black"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" paddingX="20px" marginBottom="20px">
          <NextImage src="/logo.svg" width={120} height={60} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {menu.map((item) => (
              <ListItem paddingX="20px" fontSize="16px" key={item.name}>
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box marginTop="20px">
          <List spacing={2}>
            {musicMenu.map((item) => (
              <ListItem paddingX="20px" fontSize="16px" key={item.name}>
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider color="gray.400" />

        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playLists.map((playList) => (
              <ListItem paddingX="20px" key={playList}>
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{playList}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
export default SideBar;
