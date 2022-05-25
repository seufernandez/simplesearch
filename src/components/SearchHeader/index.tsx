import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

export default function SearchHeader({ searchText, setSearchText }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const preventDefault = f => e => {
    e.preventDefault();
    f(e);
  };
  const goTo = preventDefault(() => {
    router.push({
      pathname: `/search/${searchText}`,
    });
  });

  return (
    <Box w="100vw" borderBottom="1px solid #aaaaaa28">
      <HStack px="4" h="5rem" maxWidth={1080} align="center" justify="left">
        <Box mr="2">
          <Link href="/">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="green.200"
              _hover={{
                cursor: 'pointer',
              }}
            >
              SimpleSearch
            </Text>
          </Link>
        </Box>
        <InputGroup w="80" as="form" onSubmit={goTo}>
          <Input
            color="white"
            type="text"
            placeholder="Pesquisar"
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            _focus={{
              borderColor: 'green.200',
            }}
          />
          <Button colorScheme="green" ml="2" isLoading={loading} onClick={goTo}>
            <Icon fontSize="20px" as={HiOutlineSearch} />
          </Button>
        </InputGroup>
      </HStack>
    </Box>
  );
}
