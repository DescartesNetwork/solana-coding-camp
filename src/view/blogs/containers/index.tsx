import { useMemo } from 'react'

import { Col, Empty, Row } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

import { useWidth } from 'hooks/useUI'
import CardBlog from './cardBlog'

import { useBlogs } from 'hooks/useBlogs'

import './index.less'

const Containers = () => {
  const blogs = useBlogs()
  const width = useWidth()

  const isMobile = width < 575

  const newestId = useMemo(() => {
    if (Object.keys(blogs).length) return Object.keys(blogs)[0]
    return ''
  }, [blogs])

  if (!Object.keys(blogs).length)
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
          <CardBlog
            id={newestId}
            direction={isMobile ? 'vertical' : 'horizontal'}
          />
        </Col>

        {Object.keys(blogs).map((id) => (
          <Col sm={24} md={12} lg={8} key={id}>
            <CardBlog id={id} />
          </Col>
        ))}
      </Row>
    </MaxWidthLayout>
  )
}

export default Containers
