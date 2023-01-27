import Link from "next/link";
import { useRouter } from "next/router"

const ProductDetails = () => {
    const router = useRouter();

  return (
    <div>{router.query.id}</div>
  )
}

export default ProductDetails