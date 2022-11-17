import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

import { Card, CardProps, Col, Image, Row, Space, Typography } from 'antd'
import CardSecondary from './cardSecondary'

import { useBlogs } from 'hooks/useBlogs'

export type CardBlogDirections = 'horizontal' | 'vertical'

export type CardBlogProps = {
  direction?: CardBlogDirections
  style?: CardProps['style']
  bodyStyle?: CardProps['bodyStyle']
  id: string
  transparent?: boolean
}
const CardBlog = ({
  direction = 'vertical',
  style,
  bodyStyle,
  id,
  transparent = false,
}: CardBlogProps) => {
  const { blogs } = useBlogs()
  const {
    created_at,
    feature_image,
    meta_description,
    title,
    primary_author,
    excerpt,
  } = blogs[id]
  const imgSpan = useMemo(() => {
    if (direction === 'vertical') return 24
    return 16
  }, [direction])

  const history = useHistory()

  return (
    <Card
      className="wrap-card-blog"
      style={{ borderRadius: 32, ...style }}
      bodyStyle={bodyStyle}
      bordered={false}
      onClick={() => history.push(`/blogs/${id}`)}
    >
      <Row
        style={{ alignItems: direction === 'horizontal' ? 'center' : 'start' }}
        gutter={[24, 24]}
      >
        <Col span={imgSpan}>
          <Card
            style={{ overflow: 'hidden', background: 'transparent' }}
            bodyStyle={{ padding: 0 }}
            bordered={false}
          >
            <Image src={feature_image} preview={false} />
          </Card>
        </Col>
        <Col span={imgSpan !== 24 ? 24 - imgSpan : 24}>
          <Row
            gutter={[20, 20]}
            style={{ minHeight: 220, flexDirection: 'column' }}
            justify="space-between"
          >
            <Col span={24}>
              <Row gutter={[20, 20]}>
                <Col span={24}>
                  <Typography.Title
                    level={2}
                    ellipsis={{ rows: 2, symbol: '...' }}
                  >
                    {title}
                  </Typography.Title>
                </Col>
                <Col span={24}>
                  <Typography.Paragraph
                    ellipsis={{ rows: 3, symbol: '...' }}
                    style={{ fontSize: 16 }}
                    type="secondary"
                  >
                    {meta_description || excerpt}
                  </Typography.Paragraph>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Space size={12}>
                <CardSecondary
                  avatar={primary_author.profile_image}
                  value={primary_author.name}
                  onClick={() => window.open(primary_author.url, '_blank')}
                />
                <CardSecondary
                  value={moment(created_at).format('MMM DD, YYYY')}
                />
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default CardBlog
