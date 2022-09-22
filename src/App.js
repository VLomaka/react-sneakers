import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios
        .get('https://6323470d362b0d4e7de06fcd.mockapi.io/cart');
      const favoritesResponse = await axios
        .get('https://6323470d362b0d4e7de06fcd.mockapi.io/favorites');
      const itemsResponse = await axios
        .get('https://6323470d362b0d4e7de06fcd.mockapi.io/items');

      setIsLoading(false)

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData()
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => item.id === obj.id)) {
      setCartItems(prev => prev.filter(item => item.id !== obj.id))
      axios.delete(`https://6323470d362b0d4e7de06fcd.mockapi.io/cart/${obj.id}`)
    } else {
      axios.post('https://6323470d362b0d4e7de06fcd.mockapi.io/cart', obj)
      setCartItems((prev) => [...prev, obj])
    }


  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6323470d362b0d4e7de06fcd.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    if (favorites.find((objFav) => obj.id === objFav.id)) {
      axios.delete(`https://6323470d362b0d4e7de06fcd.mockapi.io/favorites/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post('https://6323470d362b0d4e7de06fcd.mockapi.io/favorites', obj);
      setFavorites((prev) => [...prev, obj]);
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          items={items}
          favorites={favorites}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
}

export default App;
