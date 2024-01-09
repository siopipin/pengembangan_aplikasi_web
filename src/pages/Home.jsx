import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import axios from "axios";

const Home = ({ url }) => {
  //state untuk menampung data movie
  // yang di dapatkan dari HTTP request
  const [movies, setMovies] = useState([]);

  //Fungsi untuk melakukan permintaan GET ke server TMDB
  const getMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${url}`,
        {
          //mengirimkan token agar akses API diizinkan
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmVkNjBkYWE2MGVmMjExYTY2NTkxYmYxY2RkMGU5NyIsInN1YiI6IjY1OWMwZDBmMGQxMWYyNmVkMDBjMzQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EsKaOJRoazdQ-kOPfKoXJhEwQzXl9dnLvgHKkHttsgo`,
          },
        }
      );
      //memasukkan data movie yang ada pada results ke variabel data
      const data = response.data.results;
      console.log(response.data.results[0].title);
      // state movies di isikan data movies yang di ambil dari server TMDB
      setMovies([...data]);
    } catch (error) {
      console.log(error.response);
    }
  };

  //Memanggil getMovie di useEffect agar, saat pertama di panggil
  //aplikasi melakukan permintaan ke server TMDB
  useEffect(() => {
    getMovie();
    //url digunakan untuk melakukan update
    //jika url berubah maka tampilan aplikasi akan dirender ulang
    // sesuai data yang diterima dari server
  }, [url]);

  return (
    <div className="movie_container">
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default Home;
