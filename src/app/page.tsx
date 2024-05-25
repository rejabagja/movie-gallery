import ItemCard from "@/components/ItemCard";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  let linkImage = "https://m.media-amazon.com/images/M";
  return (
    <main>
        <Nav/>
        <div className="pt-16 flex justify-center mt-5">
        <div className="grid grid-cols-3 gap-5">
            <ItemCard title="The Avengers" imgMovie={`${linkImage}/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg`} year="2012"/>
            <ItemCard title="Avengers: Endgame" imgMovie={`${linkImage}/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg`} year="2019"/>
            <ItemCard title="Avengers: Infinity Wars" imgMovie={`${linkImage}/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg`} year="2018"/>
            <ItemCard title="Avengers: Age of Ultron" imgMovie={`${linkImage}/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg`} year="2015"/>
            <ItemCard title="The Avengers" imgMovie={`${linkImage}/MV5BZTQ4NmIzMTktOTdjOC00NzE4LWIzNTgtODkwNzM5ZjUzZDkxXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg`} year="1998"/>
            <ItemCard title="The Avengers: Earth's Mightiest Heroes" imgMovie={`${linkImage}/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg`} year="2010-2012"/>
            <ItemCard title="Ultimate Avengers: The Movie" imgMovie={`${linkImage}/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg`} year="2006"/>
            <ItemCard title="Ultimate Avengers II" imgMovie={`${linkImage}/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg`} year="2006"/>
            <ItemCard title="The Avengers" imgMovie={`${linkImage}/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg`} year="1961-1969"/>
            <ItemCard title="Avengers Assemble" imgMovie={`${linkImage}/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg`} year="2012-2019"/>
        </div>
        </div>
    </main>
  );
}
