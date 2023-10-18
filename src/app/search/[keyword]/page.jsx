import MangaCard from "@/components/MangaCard";
import Header from "@/components/MangaCard/Header";

const page = async ({params}) => {

  const {keyword} = params
  const res = await fetch(`${process.env.NEXT_API_URL}/manga?q=${keyword}`);
  const searchManga = await res.json();

  return (
    <>
      <section>
        <Header linkhref="/populer" linktitle="Lihat Semua" title={`Hasil untuk ${keyword}....`} />
        <MangaCard dataApi={searchManga} />
      </section>
    </>
  );
};

export default page;
