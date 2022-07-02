import { Box } from "@chakra-ui/layout";
import SideBar from "./SideBar";

const PlayerLayOut = ({ children }) => {
  return (
    <Box height="100vh" width="100vw">
      <Box position="absolute" width="250px" top="0" left="0">
        <SideBar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box bottom="0" position="absolute" left="0">
        fotter akifjalksdjflaksdjfalskdjfkl gjhgjgasdflkjasldkfj asldkfjasldkfj
        asdflkjjasdbhsdfjsdfhsdhfsjdfhjhsdf
      </Box>
    </Box>
  );
};
export default PlayerLayOut;
