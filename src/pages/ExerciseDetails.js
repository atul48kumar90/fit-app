import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';


const ExerciseDetails = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});
    const { id } = useParams();
    //console.log({id});

    useEffect(() => {

        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);
        }
        fetchExercisesData();
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail = {exerciseDetail} />
            <ExerciseVideos />
            <SimilarExercises />
        </Box>
    )
}

export default ExerciseDetails
