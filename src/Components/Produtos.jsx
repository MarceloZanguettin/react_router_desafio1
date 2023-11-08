import React from 'react';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  return (
    <div className={styles.produtos}>
      <h1>Produtos</h1>
    </div>
  );
};

export default Produtos;
