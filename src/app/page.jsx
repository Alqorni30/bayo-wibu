import MangaCard from "@/components/MangaCard";
import Header from "@/components/MangaCard/Header";

const page = async () => {
  
  const res = await fetch(`${process.env.NEXT_API_URL}/top/manga?limit=10`);
  const topManga = await res.json();

  return (
    <>
      <section className="p-4">
        <Header linkhref="/populer" linktitle="Lihat Semua" title="Populer" />
        <MangaCard dataApi={topManga} />
      </section>
    </>
  );
};

export default page;
