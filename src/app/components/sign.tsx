import Link from "next/link";

const SignIn = () => {
    return ( 
        <div>
            <Link href={"#"} className="flex bg-green-500 text-white p-3 rounded-md text-sm hover:opacity-90 transitions duration-300">Giriş / Üye Ol</Link>
        </div>
     );
}
 
export default SignIn;