import Link from "next/link";
import Blog from "../lib/fetch";

export default function Login() {
    return (
        <>
        <h1>Login Page</h1>
        <Blog />
        <h2>
            <Link href='/'>Back to home page</Link>
        </h2>
        </>
    )
}