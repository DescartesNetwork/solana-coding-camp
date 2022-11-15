import { Col, Empty, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

import CardBlog from './cardBlog'

import { useBlogs } from 'hooks/useBlogs'

import './index.less'

const Camp1 = () => {
  const { camp1Blogs } = useBlogs()

  if (!camp1Blogs.length)
    return (
      <Row justify="center">
        <Col>
          <Empty />
        </Col>
      </Row>
    )

  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Typography.Title>Coding camp 1</Typography.Title>
        </Col>

        {camp1Blogs.map((id) => (
          <Col sm={24} md={12} lg={8} key={id}>
            <CardBlog id={id} />
          </Col>
        ))}
      </Row>
    </MaxWidthLayout>
  )
}

export default Camp1
