import axios from "axios";
import { useEffect, useState } from "react";

const Http = ({ searchQuery }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${searchQuery}`
      );
      setArticles(response.data.hits);
    }
    fetchArticles();
  }, []);
  return (
    <div>
      <h1>Latest articles</h1>
      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Http;
