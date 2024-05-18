import Header from '@/components/Header';
import Link from 'next/link';

const page = () => {

  console.log("Executing.......");
  return (
    <>
    <Header />
    <div className='text-3xl underline'>page</div>
    <p>
      <Link href="/about">About page</Link>
    </p>
    </>
  )
}

export default page