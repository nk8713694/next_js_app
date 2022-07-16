/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"

const pageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
    
  return (
    <div>
      hello {pageNumber} BLOG MY GOD nitish GOAT
    </div>
  )
}

export default pageNo
