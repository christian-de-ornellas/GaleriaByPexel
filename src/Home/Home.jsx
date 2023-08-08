import { createClient } from "pexels";
import PhotoCard from "../Components/PhotoCard/PhotoCard";
import * as c from "./style";
import { useState } from "react";

function Home() {

  const [img, setImg ] = useState([])

  const client = createClient(
    "X0CTM2a3xpuUlmPAiFRwayJaSJTpYKS36y079pe05l8UZ5f9aCKBa2PL "
  );

  const getImage = async () => {
    try {
      const response = await client.photos.search({ query: 'src'}); 
      const data = response.photos; 
      setImg(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    

  };
  
  getImage();

  return (
    <>
      <c.Title>Galeria Pexel</c.Title>
      <c.ContainerGeral>
        {img.map((img, i)=> (
          <PhotoCard key={i} photographer={img.photographer} src={img.src.original} />
        ))}
      </c.ContainerGeral>
    </>
  );
}

export default Home;
