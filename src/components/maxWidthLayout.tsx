import { CSSProperties, ReactNode } from 'react'

import { Col, Row, RowProps } from 'antd'
import { MAX_WIDTH } from 'constant'

type MaxWidthLayoutProps = {
  gutter?: RowProps['gutter']
  maxWidth?: number
  colStyle?: CSSProperties
  children?: ReactNode
  style?: CSSProperties
  className?: string
}
const MaxWidthLayout = ({
  gutter,
  maxWidth = MAX_WIDTH,
  colStyle,
  children,
  style,
  className = '',
}: MaxWidthLayoutProps) => {
  return (
    <Row
      gutter={gutter}
      justify="center"
      style={{ ...style }}
      className={className}
    >
      <Col
        span={24}
        style={{
          width: '100%',
          paddingLeft: 12,
          paddingRight: 12,
          maxWidth,
          ...colStyle,
        }}
      >
        {children}
      </Col>
    </Row>
  )
}

export default MaxWidthLayout
