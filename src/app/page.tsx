import ItemCard from "@/components/ItemCard";
import Image from "next/image";

export default function Home() {
  let linkImage = "https://m.media-amazon.com/images/M";
  return (
    <main>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-4 gap-5">
          <ItemCard title="The Avengers" imgMovie={`${linkImage}/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg`} year="2012"/>
          <ItemCard title="Avengers: Endgame" imgMovie={`${linkImage}/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg`} year="2019"/>
          <ItemCard title="Avengers: Infinity Wars" imgMovie={`${linkImage}/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg`} year="2018"/>
          <ItemCard title="Avengers: Age of Ultron" imgMovie={`${linkImage}/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg`} year="2015"/>
          <ItemCard title="The Avengers" imgMovie={`${linkImage}/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg`} year="2012"/>
          <ItemCard title="Avengers: Endgame" imgMovie={`${linkImage}/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg`} year="2019"/>
          <ItemCard title="Avengers: Infinity Wars" imgMovie={`${linkImage}/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg`} year="2018"/>
          <ItemCard title="Avengers: Age of Ultron" imgMovie={`${linkImage}/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg`} year="2015"/>
          <ItemCard title="The Avengers" imgMovie={`${linkImage}/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg`} year="2012"/>
          <ItemCard title="Avengers: Endgame" imgMovie={`${linkImage}/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg`} year="2019"/>
          <ItemCard title="Avengers: Infinity Wars" imgMovie={`${linkImage}/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg`} year="2018"/>
          <ItemCard title="Avengers: Age of Ultron" imgMovie={`${linkImage}/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg`} year="2015"/>
        </div>
      </div>
    </main>
  );
}
