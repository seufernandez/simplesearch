// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import SearchHeader from '.';

describe('Header component', () => {
  it('renders properly', () => {
    const searchText = 'tenis';

    const setSearchText = jest.fn();

    const { getByText } = render(
      <SearchHeader searchText={searchText} setSearchText={setSearchText} />
    );

    expect(getByText('SimpleShirts')).toBeInTheDocument();
  });
});
