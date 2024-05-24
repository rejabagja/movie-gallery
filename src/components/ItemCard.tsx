import Image from "next/image";

interface Movie {
  title: string;
  imgMovie: string;
  year: string
}

function ItemCard({ title, imgMovie, year }: Movie) {
  return (
    <div className="border-gray-900 border-2 w-52">
      <Image
        src={imgMovie}
        alt={title}
        width={800}
        height={100}
        className="object-cover h-40"
      />
      <h2 className="text-xl text-center font-bold">{title}</h2>
      <h3 className="text-xl text-center font-bold">{year}</h3>
    </div>
  );
}

export default ItemCard;
