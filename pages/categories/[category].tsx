import { useRouter } from "next/router"

const Category = () => {
    const router = useRouter();
  return (
    <div>
        <h1>{router.query.category}</h1>
        <p>{"new commit"}</p>
    </div>
  )
}

export default Category