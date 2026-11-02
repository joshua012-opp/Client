import { useEffect, useState } from "react";

type Product = {
  image: string;
  title: string;
  description: string;
  id: number;
};

function Fetch() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status} ${response.statusText}`);
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to load products.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="p-4 text-2xl">Loading products...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-600">Error loading products: {error}</p>;
  }

  return (
    <main className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Products</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden border border-slate-200 shadow-2xl"
          >
            <div className="h-72 p-2">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="p-3">
              <h2 className="truncate font-bold">{product.title}</h2>
              {/* <p>{product.description}</p> */}
              <details className="mt-2">
  <summary className="cursor-pointer text-blue-600">
    View description
  </summary>
  <p className="mt-2 text-sm">{product.description}</p>
</details>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Fetch;



// import { useEffect, useState } from 'react'

// type Product = {
//     image: string;
//     title: string;
//     description: string;
//     id: number;
// };

// function Fetch() {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [error, setError] =useState<string | null>(null)
//     const [loading, setLoading] =useState<boolean>(true)
//     useEffect(()=> {
//         // fetch("https://fakestoreapi.com/products")
//         // .then((res)=> res.json())
//         // .then((data)=> setProducts(data))
//         const fetchProducts = () => {
//             fetch("https://fakestoreapi.com/products")
//             .then((res) =>{
//                 if (res.ok) {
//                     return res.json()
//                 } else {
//                     setError(res.statusText)
//                     setLoading(false)
//                 }
                

//             })
//             .then((data)=> {
//                 if (data) {
//                     setProducts(data)
//                     setLoading (false)
//                 }

//             })

           
//         }
// })

//  if (loading) {
//                 return(
//                     <div className='h-screen'>
//                     <p className='text-2xl'></p>
//                     </div>
//                 )
                
//             }

  
//     return (
//         <div>
//     <p>Fetch</p>
//     <div className='grid grid-cols-4 border'>
//         {products.map((product)=>( 
//             <div key={product.id} className='shadow-2xl border border-slate-200'>
//             <div className='h-72 p-2'>
//                 <img src={product.image} alt={product.title} className='h-full w-full' />
//             </div>
//             <div className='p-3'>
//                 <p className='font-bold truncate'>{product.title}</p>
//                 <p className=''>{product.description}</p>
//             </div>
//             <p>{product.description}</p>
//             </div>
//         ))}
//     </div>
//     </div>
//   )
// }

// export default Fetch