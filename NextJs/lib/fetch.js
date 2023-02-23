export async function getFetchData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('http://localhost:5000/goshofeedbacks');
    return res.json();
  };

  // function Blog({ posts }) {
  //   return (
  //     <ul>
  //       {posts.map((post) => (
  //         <li>{post.title}</li>
  //       ))}
  //     </ul>
  //   )
  // }
  // export async function getStaticProps() {
  //   const res = await fetch('http://localhost:5000/goshofeedbacks');
  //   const posts = await res.json();

  //   return {
  //     props: {
  //       posts,
  //     },
  //   }
  // };

  // export default Blog