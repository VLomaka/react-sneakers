import Header from './components/Header'
import Drawer from './components/Drawer'
import Card from './components/Card'
const arr = [
  { title: 'Чоловічі Кросівки Nike Blazer Mid Suede', price: 12999, imageUrl: "/react-sneakers/img/1sneakers.jpg" },
  { title: 'Чоловічі Кросівки Nike Air Max 270', price: 12999, imageUrl: "/react-sneakers/img/2sneakers.jpg" },
  { title: 'Чоловічі Кросівки Nike Blazer Mid Suede', price: 8500, imageUrl: "/react-sneakers/img/3sneakers.jpg" },
  { title: 'Кросівки Puma X Aka Boku Future Rider', price: 8999, imageUrl: "/react-sneakers/img/4sneakers.jpg" },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Колекція кросівок</h1>
          <div className="search-block d-flex">
            <img width={14} src="/react-sneakers/img/search.svg" alt="search" />
            <input placeholder="Пошук..." />
          </div>
        </div>

        <div className="d-flex">


          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl} />
          ))}

        </div>
      </div>
    </div>

  );
}

export default App;
