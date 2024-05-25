import Image from "next/image";

interface Movie {
  title: string;
  imgMovie: string;
  year: string
}

function ItemCard({ title, imgMovie, year }: Movie) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <Image
        src={imgMovie}
        alt={title}
        width={500}
        height={300}
        className="w-full"
        objectFit="cover"
        />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-800 text-base">{year}</p>
        </div>
    </div>
  );
}

export default ItemCard;
