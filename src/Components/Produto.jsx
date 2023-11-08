import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      const response = await fetch(url);
      const json = response.json();
      setProduto(json);
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produtos/${id}`);
  }, [id]);

  return (
    <div className={styles.produto}>
      <h1>Produto</h1>
    </div>
  );
};

export default Produto;
