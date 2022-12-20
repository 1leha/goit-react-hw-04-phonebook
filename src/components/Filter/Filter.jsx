import React from 'react';
import { TiDelete } from 'react-icons/ti';

import { Box } from 'components/Box';

import { LabelStyled, InputStyled, ButtonStyled } from './Filter.styled';

const Filter = ({ filterString, onChange, clearFilter }) => {
  return (
    <Box mb="4">
      <LabelStyled htmlFor="filter">Find contacts by name</LabelStyled>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt="2"
      >
        <InputStyled
          type="text"
          name="filter"
          id="filter"
          value={filterString}
          onChange={onChange}
        />

        <ButtonStyled
          type="button"
          aria-label="Clear filter"
          onClick={clearFilter}
        >
          <TiDelete size="36" />
        </ButtonStyled>
      </Box>
    </Box>
  );
};

export default Filter;
