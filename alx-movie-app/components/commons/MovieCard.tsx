import { MovieProps } from "@/interfaces";
import Image from "next/image";

const MovieCard: React.FC<MovieProps> = ({ title, posterImage, releaseYear }) => {
  const defaultImage = "/images/default-movie-poster.jpg"; 

  return (
    <div className="h-[563px]">
      <div>
        <Image
          className="h-[430px] w-full rounded-md hover:cursor-pointer"
          src={posterImage || defaultImage}  
          width={100}
          height={100}
          alt={title}
          unoptimized={true}
        />
      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xl text-[#E2D609]">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
