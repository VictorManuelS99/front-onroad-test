import { AiOutlineLogout } from "react-icons/ai";

import { Text } from "@Components/Atoms";
import { Wrapper } from "./styles";

export const Header = () => {
  const closeSession = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <Wrapper>
      <Text fontWeight="700" fontSize="2rem" color="#f0b90b">
        Welcome to the store
      </Text>
      <button onClick={closeSession}>
        <Text>Sign off</Text>
        <AiOutlineLogout />
      </button>
    </Wrapper>
  );
};
