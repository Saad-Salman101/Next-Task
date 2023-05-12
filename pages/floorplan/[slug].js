import 'es6-promise/auto';
import { useRouter } from 'next/router';
import CryptoJS from 'crypto-js';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Floorplan from '../../components/Floorplan';
import data from '../../components/zp_api_listing_data.json';


export default function FloorplanPage() {

 const router = useRouter();
 const id = router.query.slug;
 const [product, setProduct] = useState(null);
 const [loading, setLoading] = useState(true);
 const [imagesArray, setImagesArray] = useState([]);




 // Decrypt the ID from the query
 const decodedId = decodeURIComponent(id);
 const bytes = CryptoJS.AES.decrypt(decodedId, 'secret');
 const decryptedId = bytes.toString(CryptoJS.enc.Utf8);

 useEffect(() => {
   const fetchProduct = async () => {
     // Simulate fetching product data asynchronously
     await new Promise((resolve) => setTimeout(resolve, 1000)); /* eslint-disable-line no-undef */

     // Find the product with the decrypted ID
     const product = data.listing.find((p) => p.id === parseInt(decryptedId));
     if (product) {
       setProduct(product);
       setImagesArray(['https://wpmedia.roomsketcher.com/content/uploads/2021/12/07133333/RoomSketcher-High-Quality-3D-Floor-Plans.jpg',
       'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Sample_Floorplan.jpg/290px-Sample_Floorplan.jpg',
       'https://www.livehome3d.com/assets/img/articles/how-to-draw-a-floor-plan/floor-plan-of-a-house-with-a-pool.jpg',
       'https://wpmedia.roomsketcher.com/content/uploads/2022/02/03101147/3D-Floor-Plans-Blue-Walls-With-Balcony.jpg'])
     }

     setLoading(false);
   };

   fetchProduct();
 }, [decryptedId]);

 if (loading) {
   return <div>Loading...</div>;
 }

//  const encryptedId = CryptoJS.AES.encrypt(decryptedId.toString(), 'secret').toString();
//  const encodedId = encodeURIComponent(encryptedId);
 
return (
    <>
      <Header />
    <Floorplan props={imagesArray} product={product}/>
    </>
  );
}
