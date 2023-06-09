import Head from "next/head"
import Date from "../../components/date"
import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import utilStyles from '../../styles/utils.module.css'

const Post = ({ postData }) => {
  const { title, id, date, contentHtml } = postData
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  )
}


export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export default Post
