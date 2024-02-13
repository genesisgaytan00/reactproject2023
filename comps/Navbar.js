import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <img src="/cute bee.png" alt="Beehive Logo" width={100} height ={60} />
            </div>
            <Link href="/">Home </Link> 
            <Link href="/about">About </Link> 
            <Link href="/reviews">Reviews</Link> 
        </nav>
     );
}
 
export default Navbar;
