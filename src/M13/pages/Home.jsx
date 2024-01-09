import axios from "axios";
import { useEffect, useState } from "react";

const HomeM13 =() => {
    const [movies, setMovies] = useState('')
    
    // proses untuk cek API availble.
    const getMovie = async ()  => {
        try {
            const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
                'headers' : {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmVkNjBkYWE2MGVmMjExYTY2NTkxYmYxY2RkMGU5NyIsInN1YiI6IjY1OWMwZDBmMGQxMWYyNmVkMDBjMzQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EsKaOJRoazdQ-kOPfKoXJhEwQzXl9dnLvgHKkHttsgo`
                }
            })

            let tmpData = res.data
            console.log(tmpData.results[0].title); 
            setMovies(tmpData.results[0].title)
        } catch (error) {
            console.log('Ada kesalahan');
        }
    }

    useEffect(() => {
        getMovie()
    }, [])
    
    // ini adalah tampilannya
    return (
        <div>
            <h2>{movies}</h2>
        </div>
    )
}

export default HomeM13;