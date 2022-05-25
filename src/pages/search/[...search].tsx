import { Box, Text } from '@chakra-ui/react';

import axios from 'axios';

import Head from 'next/head';
import { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import SearchHeader from '../../components/SearchHeader/index';

export default function Home({ searchResultArray, searchedText }) {
  const [searchText, setSearchText] = useState(`${searchedText}`);

  const lastSearch = searchedText;

  return (
    <>
      <Head>
        <title>Resultados para {lastSearch}</title>
      </Head>
      <>
        <SearchHeader searchText={searchText} setSearchText={setSearchText} />
        <Box align="left" h="calc(100vh - 6rem)" width="100vw" px="12" py="6">
          <Text fontSize="sm" color="gray.400" mb="4">
            Exibindo resultados para :{' '}
            <Text as="span" fontWeight="bold">
              {lastSearch}
            </Text>
          </Text>

          {searchResultArray?.length > 0 ? (
            searchResultArray.map(result => (
              <Box mb="2">
                <Text fontSize="2xl" color="green.400">
                  {result.name}
                </Text>
                <Text />
              </Box>
            ))
          ) : (
            // eslint-disable-next-line prettier/prettier
            <p>&quot;{searchedText}&quot; infelizmente não retornou nenhum resultado...</p>
          )}
        </Box>
      </>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { search: searchText } = params;

  try {
    const searchResult = await axios({
      method: 'get',
      url: `https://mystique-v2-americanas.juno.b2w.io/autocomplete?source=nanook&content=${searchText}`,
    }).then(function (response) {
      return response.data;
    });

    return {
      props: {
        searchResultArray: searchResult.products,
        searchedText: searchText[0],
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (error) {
    return {
      props: {
        searchedText: searchText[0],
      },
    };
  }
};
