import { Flex, Box, Spacer, LinkBox } from "@chakra-ui/react";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function handleConnect() {
    if (window.ethereum) {
      const _accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(_accounts);
      console.log(_accounts);
    }
  }

  return (
    <Flex justify="space-between" align="center" padding="0 0px">
      {/* Left Side: Social media icons: */}

      <Flex justify="space-around" align="center" width="40%" padding="0 30px">
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
          <p>Connected</p>
        ) : (
          <button onClick={handleConnect}>Connect</button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;
