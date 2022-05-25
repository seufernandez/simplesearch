/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Center,
  Icon,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import { HiOutlineSearch } from 'react-icons/hi';
import { motion } from 'framer-motion';

import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const preventDefault = f => e => {
    e.preventDefault();
    f(e);
  };

  const goTo = preventDefault(() => {
    router.push({
      pathname: `/search/${searchText}`,
    });
    setLoading(true);
  });

  return (
    <>
      <Head>
        <title>SimpleSearch</title>
      </Head>

      <Box height="100vh" width="100vw" align="center">
        <Center w="100vw" h="100vh" px="8">
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <Box>
              <Text
                fontSize={['5xl', '5xl', '6xl']}
                fontWeight="600"
                color="green.200"
              >
                SimpleSearch :)
              </Text>

              <Text
                mb="14"
                fontSize={['sm', 'sm', 'md']}
                fontWeight="400"
                color="green.600"
              >
                your "Keep It Simple and Stupid" searcher!
              </Text>
              <InputGroup w="80%" as="form" onSubmit={goTo}>
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
                <Button
                  colorScheme="green"
                  ml="2"
                  isLoading={loading}
                  onClick={goTo}
                >
                  <Icon fontSize="20px" as={HiOutlineSearch} />
                </Button>
              </InputGroup>
            </Box>
          </motion.div>
        </Center>
      </Box>
    </>
  );
}
