import Link from "next/link";

export default function FirstPost() {
    return (
        <>
        <img style={{height:'230px', width: '200px'}} src="/images/profile.jpg" alt="My Name" />
        <h1>First Post</h1>
        <h2>
        <Link href='/'>Back to home page</Link>

        </h2>
        </>
        )
};