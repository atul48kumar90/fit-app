import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';

const SearchExercises = () => {

    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        if(search) {
            // const exerciseData = await fetchData();
        }
    }


    return(
        <Stack alighItems="center" mt="37px" justifyContent="canter" p="20px" >
            <Typography fontWeight={700} sx={{ fontSize:{ lg:'34px', sx:'30px'}}} mb="49px" textAlign="center">
                Awesome exercises you <br /> should know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight:'700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width:{ lg:'800px', sx:'350px'},
                        backgroungdColor:'#fff',
                        borderRadius:'40px'
                    }}
                    height="76px"
                    // sx={{}}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase()) }
                    placeholder="search exercises"
                    type="text"
                />
                <Button className="search-btn" sx={{ bgcolor:'#FF2625', color:'#fff', textTransform:'none', width:{ lg:'175px', xs:'80px'}, fontSize:{ lg:'20px', xs:'14px'}, height:"56px", position:"absolute"}} onClick={handleSearch}>Search</Button>
            </Box>
        </Stack>
    );
};

export default SearchExercises;