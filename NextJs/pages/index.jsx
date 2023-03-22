import {useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getFetchData } from '../lib/fetch';
import Date from '../components/date';
import { useRouter } from 'next/router';

function Header({title}) {
    return <h1>{title ? title : "Default title"}</h1>
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // const allPostsData = getFetchData();
  // const allFetchData = await getFetchData()
  // console.log(allFetchData)
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            // <li className={utilStyles.listItem} key={id}>
            //   {title}
            //   <br />
            //   {id}
            //   <br />
            //   {date}
            // </li>
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
             <br />
            <small className={utilStyles.lightText}>
            <Date dateString={date} />
            </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

