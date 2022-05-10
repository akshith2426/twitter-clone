import type { NextPage,GetServerSideProps } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'
import { Toaster } from 'react-hot-toast'
interface Props{ 
  tweets:Tweet[]
}
const Home = ({ tweets }: Props) => {
  return (
    <div className="lg:max-w-6xl mx-auto ">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      <Toaster/>
      <main className="grid grid-cols-9 ">
        {/* Sidebar */}
        <Sidebar/>

        {/* Feed */}
        <Feed tweets={tweets} />
        {/* widgets */}
        <Widgets/>
      </main>
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    }
  }
}