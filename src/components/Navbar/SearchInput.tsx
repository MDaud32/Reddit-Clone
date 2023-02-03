import React from "react";
import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type SearchInputProps = {
  // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex align="center" flexGrow={1} mr={2}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" marginBottom={1} />}
        />
        <Input
          type="tel"
          placeholder="Search Reddit"
          fontSize="10px"
          _placeholder={{ color: "gray.500" }}
          _hover={{ bg: "white", border: "1px solid blue.500" }}
          height="35px"
          _focus={{
            outline: "none",
          }}
          bg="gary.50"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
