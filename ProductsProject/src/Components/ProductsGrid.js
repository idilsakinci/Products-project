import React, { useEffect, useState } from 'react'
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase-config';
import './components.css';
import { BiTrash, BiDesktop } from "react-icons/bi";

const ProductsGrid=() => {

  const [listProducts, setListProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setListProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  });

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id)
    await deleteDoc(productDoc);
  };

  return (
    <div className="container productList ">
      <div className="row productRow">
        {listProducts.map((product) => {
          return (
            <div class="card col-md-3 mb-3 mx-2 border-secondary ">
              <div class="card-header bg-transparent border-secondary">{product.name}</div>
              <div class="card-body text-secondary">
                <p class="card-text">Coordinates: {product.coordinates}</p>
              </div>
              <div class="card-footer bg-transparent border-secondary">
                <div className="formatProduct">
                  <p className='formatIcon formatItem mx-2'><BiDesktop size="20" color="black"></BiDesktop></p>
                  <p className="card-text formatItem">{product.format}</p>
                </div>
                <div className="deleteProduct">
                  <p onClick={() => { deleteProduct(product.id) }}><BiTrash size="20" color="red"></BiTrash></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div >
  );
}

export default ProductsGrid
