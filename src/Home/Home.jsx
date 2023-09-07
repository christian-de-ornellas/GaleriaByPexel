import { createClient } from "pexels";
import PhotoCard from "../Components/PhotoCard/PhotoCard";
import * as c from "./style";
import { useCallback, useEffect, useState } from "react";
import Button from "../Components/Button/Button";
import FormSearch from "../Components/FormSearch/FormSearch";

function Home() {
  const [img, setImg] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const client = createClient(
    "X0CTM2a3xpuUlmPAiFRwayJaSJTpYKS36y079pe05l8UZ5f9aCKBa2PL "
  );

  const getImage = useCallback(
    async (page) => {
      try {
        const response = await client.photos.curated({
          page,
          per_page: 20,
          query: search,
        });
        const data = response.photos;
        setImg(data);
        setTotalPages(response.total_results / response.per_page);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [client.photos, search]
  );

  useEffect(() => {
    getImage(currentPage);
  }, [currentPage]);

  const handleNextpage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <c.Title>Galeria Pexel</c.Title>
      <FormSearch onSearchChange={setSearch} />
      <c.ContainerGeral>
        {img.map((img, i) => (
          <PhotoCard
            key={i}
            photographer={img.photographer}
            src={img.src.original}
          />
        ))}
      </c.ContainerGeral>
      <Button
        onClick={handleNextpage}
        text={"Proximo"}
        width={"250px"}
        height={"50px"}
      />
      <Button
        onClick={handlePreviusPage}
        text={"Anterior"}
        width={"250px"}
        height={"50px"}
      />
    </>
  );
}

export default Home;
