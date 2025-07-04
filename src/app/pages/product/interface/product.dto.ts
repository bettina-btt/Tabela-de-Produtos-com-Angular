/**
 * Representa os dados do Produto no sistema
 *
 * @interface Product
 */
export interface Product {
  /**
   * ID do produto.
   */
  id: string;

  /**
   * Nome ou Título do produto.
   */
  title: string;

  /**
   * Preço do produto.
   */
  price: number;

  /**
   * Descrição do produto.
   */
  description: string;

  /**
   * Categoria que o produto pertence
   */
  category: string;

  /**
   * URL da imagem do produto.
   */
  image: string;
}
