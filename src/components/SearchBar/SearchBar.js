import React, { useState } from 'react';

import {
  Card, CardContent, Paper,
  TextField, InputAdornment
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props) {
  const { ...rest } = props;
  const [inputSearch, setInputSearch] = useState('');

  return (
    <Paper
      sx={{ p: 1.5, mb: 3 }}
      {...rest}
    >
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
        }}
      />
    </Paper>
  );
}

SearchBar.propTypes = {

};

export default SearchBar;