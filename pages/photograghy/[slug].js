import 'es6-promise/auto';
import { useRouter } from 'next/router';
import CryptoJS from 'crypto-js';
import data from '../../components/zp_api_listing_data.json';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
// import Image from 'next/image';
import ImageGallery from '../../components/ImageGallery2';
import Footer from '../../components/Footer';

export default function PhotographyPage() {
  const router = useRouter();
  const id = router.query.slug;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setProduct(product);

      // Extract the image URLs into an array
      const imagesArray = product.details.images.split(',');
      setImagesArray(imagesArray);

      setLoading(false);
    };

    fetchProduct();
  }, [decryptedId]);

  const [imagesArray, setImagesArray] = useState([]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <ImageGallery props={imagesArray}/>
      <Footer myprops={product}/>
    </>
  );
}
