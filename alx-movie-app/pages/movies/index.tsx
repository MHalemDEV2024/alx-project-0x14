import Button from "@/components/commons/Button";
import Loading from "@/components/commons/Loading";
import MovieCard from "@/components/commons/MovieCard";
import { MoviesProps } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";

interface MProps {
  movies: MoviesProps[];
}

const Movies: React.FC<MProps> = () => {
  const [page, setPage] = useState<number>(1);
  const [year, setYear] = useState<number | null>(null);
  const [genre, setGenre] = useState<string>("All");
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/fetch-movies", {
        method: "POST",
        body: JSON.stringify({
          page,
          year,
          genre: genre === "All" ? "" : genre,
        }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      setMovies(data.movies);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching movies:", error);
    }
  }, [page, year, genre]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="min-h-screen bg-[#110F17] text-white px-4 sm:px-6 md:px-10 lg:px-24 xl:px-32 2xl:px-44">
      <div className="py-12 md:py-16">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 mb-6">
          <input
            type="text"
            placeholder="Search for a movie..."
            className="border-2 w-full md:w-80 lg:w-96 border-[#E2D609] outline-none bg-transparent px-4 py-2 rounded-full text-white placeholder-gray-400"
          />

          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setYear(Number(e.target.value))}
            className="border-2 border-[#E2D609] outline-none bg-transparent px-4 md:px-6 py-2 rounded-full w-full md:w-auto"
          >
            <option value="">Select Year</option>
            {[2024, 2023, 2022, 2021, 2020, 2019].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Header and Genres */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
            {year || "All Years"} {genre} Movies
          </h1>

          <div className="flex gap-2 overflow-x-auto pb-2 md:gap-4">
            {["All", "Animation", "Comedy", "Fantasy"].map((g) => (
              <Button key={g} title={g} action={() => setGenre(g)} />
            ))}
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {movies.length ? (
            movies.map((movie: MoviesProps, key: number) => (
              <MovieCard
                key={key}
                title={movie?.titleText?.text || "No Title"}
                posterImage={movie?.primaryImage?.url || "/images/default-movie-poster.jpg"}
                releaseYear={movie?.releaseYear?.year || "N/A"}
              />
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">No movies found.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center md:justify-end mt-6 gap-4 flex-wrap">
          <Button title="Previous" action={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))} />
          <Button title="Next" action={() => setPage(page + 1)} />
        </div>
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default Movies;
