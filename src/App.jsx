import ProductDetails from "./components/ProductDetails";


const product = {
    title: 'Classic Cotton T-Shirt',
    images: ['redT.png', 'greenT.png', 'blueT.png'],
    colors: ['#FF0000', '#00FF00', '#0000FF'],
    sizes: ['S', 'M', 'L', 'XL'],
  };

const App = () => {
    return ( 
        <>
        <ProductDetails product={product} />
        </>
     );
}
 
export default App;