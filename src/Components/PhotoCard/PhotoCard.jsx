import * as c from "./style";

function PhotoCard({ photographer, altDetail, src }) {
  return (
    <c.Container>
      <c.Container>
        <c.P fontSize="15px">Autor:</c.P>
        <c.P fontSize="23px">{photographer}</c.P>
        <c.IMG src={src} />
        <c.P fontSize="12">{altDetail}</c.P>
      </c.Container>
    </c.Container>
  );
}

export default PhotoCard;
