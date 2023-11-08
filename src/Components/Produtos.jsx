import React from 'react';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <div className={styles.produtos}>
      <div>
        {produtos.map((produto) => (
          <div key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
