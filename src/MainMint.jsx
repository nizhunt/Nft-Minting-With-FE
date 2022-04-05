import { BigNumber, ethers } from "ethers";
import { useState } from "react";
import roboPunkAbi from "./RoboPunksNFT.json";
import { Button, Box } from "@chakra-ui/react";
const roboPunksNFTAddress = "0xD7c893566CF289086451e75DB5B7050ea1d0219e";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        roboPunksNFTAddress,
        roboPunkAbi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log("response:", response);
      } catch (e) {
        console.log("erroe: ", e);
      }
    }
  }

  const handleDecrement = () => {
    // prevent the decrement from going below 1
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };
  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <>
      <h1>Robo-Punks</h1>
      <Box padding="60px 80px">
        Welcome to the Punk community, Mint the Punks and get a sneak peak into
        the future of the cyber world.
      </Box>
      {isConnected ? (
        <Box>
          <Box>
            <Button
              backgroundColor="#D6517D"
              borderRadius="5px"
              boxShadow="0px 0px 20px rgba(0, 0, 0, 0.9)"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="0 15px"
              onClick={handleDecrement}
            >
              -
            </Button>
            <input type="number" value={mintAmount} />
            <Button
              backgroundColor="#D6517D"
              borderRadius="5px"
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="0 15px"
              onClick={handleIncrement}
            >
              +
            </Button>
          </Box>
          <Button
            backgroundColor="#D6517D"
            borderRadius="5px"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            onClick={handleMint}
          >
            Mint Now!
          </Button>
        </Box>
      ) : (
        <Box padding="120">
          You are not yet connected mate, connect your wallet first by pressing
          the Connect button in navigation.
        </Box>
      )}
    </>
  );
};
export default MainMint;
