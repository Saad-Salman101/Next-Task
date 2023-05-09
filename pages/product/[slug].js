import { useRouter } from 'next/router';
import CryptoJS from 'crypto-js';
import data from '../../components/zp_api_listing_data.json'; // your product data source

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Decrypt the ID from the slug
  const bytes = CryptoJS.AES.decrypt(slug, 'secret');
  const decryptedId = bytes.toString(CryptoJS.enc.Utf8);

  // Find the product with the decrypted ID
  const product = data.listing.find((p) => p.id == parseInt(decryptedId));
console.log(product)
  // Render the product information
  return (
    <div>
      <h1 className='font-[38px]'>{product.id}</h1>
      <p>{product.category_slug}</p>

    </div>
  );
}
