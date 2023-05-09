import { useRouter } from 'next/router';
import CryptoJS from 'crypto-js';
import data from '../../components/zp_api_listing_data.json'; // your product data source

export default function ProductPage() {
  const router = useRouter();
  let decryptedId = '';

  if (router.query.slug) {
    // Decrypt the ID from the slug
    const bytes = CryptoJS.AES.decrypt(router.query.slug, 'secret');
    decryptedId = bytes.toString(CryptoJS.enc.Utf8);

    if (decryptedId) {
      const decryptedObject = JSON.parse(decryptedId); // Parse the decrypted string into an object
      if (decryptedObject.salt) {
        // Access the 'salt' property here
        const saltValue = decryptedObject.salt;
        console.log(saltValue);
      } else {
        // Handle the case where 'salt' is undefined or not present
        console.log("'salt' property is not present in the decrypted object.");
      }
    } else {
      console.log("Decrypted data is undefined.");
    }
  }

  // Find the product with the decrypted ID
  const product = data.listing.find((p) => p.id == parseInt(decryptedId));
  console.log(product);

  // Render the product information
  return (
    <div>
      <h1 className='font-[38px]'>{product.id}</h1>
      <p>{product.category_slug}</p>
    </div>
  );
}
