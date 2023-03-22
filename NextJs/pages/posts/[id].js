import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from 'next/head';
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <Layout>
      {/* Add this <Head> tag */}
      {/* <Head>
        <title>{postData.title}</title>
      </Head> */}
      <Date dataString={postData.data} />
      {/* Keep the existing code here */}
    </Layout>
  );
}

// export async function getStaticPaths() {
//   // Return a list of possible value for id
// }

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
