import Image from "next/image";
import Link from "next/link";

const MangaCard = ({ dataApi }) => {
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 p-4 gap-4">
      {dataApi.data.map((manga) => {
        return (
          <Link className="cursor-pointer" href={`/${manga.mal_id}`}>
            <Image
              src={manga.images.jpg.image_url}
              alt={manga.title}
              width={300}
              height={300}
              className="rounded-lg w-[300px] h-[300px]"
            />
            <h3 className="font-semibold p-2 text-white">{manga.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default MangaCard;
