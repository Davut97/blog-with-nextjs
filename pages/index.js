import Head from "next/head";
import { PostCard, PostWidget, Categories, YoutubeVideos } from "../components/index";
import { getPosts, getYoutubeVideosLink } from "../services";
import { FeaturedPosts } from "../sections";
export default function Home({ youtubeIds }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <FeaturedPosts />
      <Head>
        <title>pisiranadam</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 '>
        {youtubeIds.map((videoId, index) => (
          <YoutubeVideos videosLink={videoId.videosLink} key={videoId.videosLink} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const youtubeIds = (await getYoutubeVideosLink()) || [];

  return {
    props: { youtubeIds },
  };
}
