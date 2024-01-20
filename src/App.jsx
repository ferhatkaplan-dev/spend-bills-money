import Header from "./components/Header";
import Money from "./components/Money";
import Products from "./components/Products";
import Receipt from "./components/Receipt";
// toplam para,
function App() {
  return (
    <div className="container mx-auto space-y-4">
      <Header />
      <Money />
      <Products />
      <Receipt />
    </div>
  );
}

export default App;
