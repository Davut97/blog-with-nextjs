import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../../components/index";
import { getPosts } from "../../services";

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        {posts.map((post, index) => (
          <PostCard post={post.node} key={post.title} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
