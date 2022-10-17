import { useHistory, useParams } from 'react-router-dom'
import moment from 'moment'

import { Button, Col, Empty, Image, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CardSecondary from '../containers/cardSecondary'

import { useBlogs } from 'hooks/useBlogs'

import './index.less'
import IonIcon from '@sentre/antd-ionicon'

export type BlogParams = { blogId: string }

const BlogDetails = () => {
  const blogs = useBlogs()
  const params: BlogParams = useParams()
  const history = useHistory()
  const blogData = blogs[params.blogId]

  if (!blogData)
    return (
      <Row justify="center">
        <Col>
          <Empty />
        </Col>
      </Row>
    )
  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} md={16}>
          <Button
            type="text"
            style={{ padding: 0, width: 'auto', height: 'auto' }}
            icon={<IonIcon name="arrow-back-outline" />}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </Col>
        <Col xs={24} md={16}>
          <Image src={blogData.feature_image} preview={false} />
        </Col>
        <Col xs={24} md={16}>
          <Space direction="vertical">
            <Typography.Title level={1}>{blogData.title}</Typography.Title>
            <Space size={12}>
              <CardSecondary
                avatar={blogData.primary_author.profile_image}
                value={blogData.primary_author.name}
                onClick={() =>
                  window.open(blogData.primary_author.url, '_blank')
                }
              />
              <CardSecondary
                value={moment(blogData.created_at).format('MMM DD, YYYY')}
              />
            </Space>
          </Space>
        </Col>
        <Col span={24} /> {/* safe space */}
        <Col
          xs={24}
          md={16}
          className="blog-details-content"
          dangerouslySetInnerHTML={{ __html: blogData.html }}
        ></Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default BlogDetails
