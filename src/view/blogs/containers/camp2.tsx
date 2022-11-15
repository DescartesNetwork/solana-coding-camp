import { useMemo } from 'react'

import { Col, Empty, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CardBlog from './cardBlog'

import { useWidth } from 'hooks/useUI'
import { useBlogs } from 'hooks/useBlogs'

import './index.less'

const Containers = () => {
  const { camp2Blogs } = useBlogs()
  const width = useWidth()
  const isMobile = width < 575

  const newestId = useMemo(() => {
    if (camp2Blogs.length) return camp2Blogs[0]
    return ''
  }, [camp2Blogs])

  if (!camp2Blogs.length)
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
          <Typography.Title>Coding camp2</Typography.Title>
        </Col>
        <Col span={24}>
          <CardBlog
            id={newestId}
            direction={isMobile ? 'vertical' : 'horizontal'}
          />
        </Col>
        {camp2Blogs.map((id) => (
          <Col sm={24} md={12} lg={8} key={id}>
            <CardBlog id={id} />
          </Col>
        ))}
      </Row>
    </MaxWidthLayout>
  )
}

export default Containers
