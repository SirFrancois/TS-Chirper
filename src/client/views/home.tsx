import React from 'react'
import { chirp } from '../types';
import Home from "./components/New"


export const Home: React.Fc<HomeProps> = (props: HomeProps) => {
    const [chirps, setChirps] = React.useState<chirp[]>([]);

    React.useEffect(() => {
        getChirps();

    },[])

}


