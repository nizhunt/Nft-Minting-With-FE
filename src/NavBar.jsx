import { Flex, Box, Spacer, LinkBox, Button } from "@chakra-ui/react";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);
  const targetNetworkId = "0x4";

  const handleConnect = async () => {
    if (window.ethereum) {
      // switch to the target network ie. rinkeby
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: targetNetworkId }],
      });
      // refresh the page to get the new accounts
      // window.location.reload();

      // get the user's accounts
      const _accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(_accounts);
      console.log(_accounts);
    }
  };

  return (
    <Flex justify="space-between" align="center" padding="0 0px">
      {/* Left Side: Social media icons: */}

      <Flex
        justify="space-around"
        align="center"
        width="70%"
        padding="0 30px"
        my="50px"
      >
        <a color="white" href="https://facebook.com">
          <LinkBox> Twitter</LinkBox>
        </a>

        <Spacer />

        <a href="https://facebook.com">
          <Box margin="0 15px">Discord</Box>
        </a>

        <Spacer />

        <a href="https://facebook.com">
          <Box margin="0 15px">Instagram</Box>
        </a>

        <Spacer />

        <a href="https://facebook.com">
          <Box margin="0 15px">Youtube</Box>
        </a>
      </Flex>

      {/* Right side: Sections and connect: */}

      <Flex justify="space-around" align="center" width="40%" padding="0 30px">
        <Box margin="0 15px">About</Box>
        <Box margin="0 15px">Mint</Box>
        <Box margin="0 15px">Team</Box>

        {/* Connect */}
        {isConnected ? (
          <Box margin="0 15px" padding="15px">
            Connected
          </Box>
        ) : (
          <Button
            backgroundColor="#D6517D"
            borderRadius="50px"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            opacity="0.85"
            onClick={handleConnect}
          >
            Connect
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;
