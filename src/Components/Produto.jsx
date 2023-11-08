import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError('Um erro ocorreu');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produtos/${id}`);
  }, [id]);

  if (loading) return <div>Carregando</div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <div className={styles.produto}>
      <h1>Produto</h1>
    </div>
  );
};

export default Produto;
