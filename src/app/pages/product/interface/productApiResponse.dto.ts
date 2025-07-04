/**
 * Representa os dados do produto da API fakestoreapi
 * @link https://fakestoreapi.com/docs
 *
 * @interface ProductApiResponse
 */
export interface ProductApiResponse {
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
