import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { genreId, authorName } = useParams();
  console.log(genreId);
  return <div>Now showing product with id - {genreId}</div>;
};
export default ProductDetails;
