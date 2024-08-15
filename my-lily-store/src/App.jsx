import React, { useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Белые лилии',
    image: 'https://example.com/white-lily.jpg',
    price: 10,
  },
  {
    id: 2,
    name: 'Розовые лилии',
    image: 'https://example.com/pink-lily.jpg',
    price: 12,
  },
  {
    id: 3,
    name: 'Оранжевые лилии',
    image: 'https://example.com/orange-lily.jpg',
    price: 15,
  },
];

function App() {
  const [cart, setCart] = React.useState([]);

  // Загрузка данных из localStorage при монтировании компонента
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Ошибка при парсинге корзины из localStorage:', error);
      }
    }
  }, []);

  // Сохранение данных в localStorage при изменении корзины
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Ошибка при сохранении корзины в localStorage:', error);
    }
  }, [cart]);

  // Функция для добавления товара в корзину
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Расчет общей суммы товаров в корзине
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="min-h-screen bg-lavender p-4">
      <h1 className="text-3xl font-bold text-center text-lavenderGray">Магазин свежести и радости</h1>
      <p className="text-center text-lg mb-6">Добро пожаловать в наш магазин, где свежесть и радость - это наш основной посыл. У нас вы найдете все виды лилий и сопутствующие товары для девушек от 14 до 45 лет. Пусть лавандовый стиль нашего магазина подарит вам незабываемые впечатления.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-lavenderBlush p-4 rounded shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-bold mt-4">{product.name}</h2>
            <p className="mt-2">Цена: ${product.price}</p>
            <button
              className="mt-4 bg-lavenderGray text-white px-4 py-2 rounded hover:bg-lavender"
              onClick={() => addToCart(product)}
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-8">Корзина</h2>
      {cart.length === 0 ? (
        <p className="mt-4">Ваша корзина пуста.</p>
      ) : (
        <div>
          <ul className="mt-4">
            {cart.map((product, index) => (
              <li key={index} className="border-b py-2">
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold mt-4">Общая сумма: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
}

export default App;