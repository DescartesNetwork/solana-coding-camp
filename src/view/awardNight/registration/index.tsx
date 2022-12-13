import { Button } from 'antd'

import useLanguages from 'hooks/useLanguages'

import configs from 'configs'
import './index.less'

const {
  typeform: { luma },
} = configs

const RegistrationWN = () => {
  const { CTA } = useLanguages()
  return (
    <Button
      type="primary"
      onClick={() => window.open(luma, '_blank')}
      block
      style={{ fontWeight: 700 }}
    >
      {CTA.register}
    </Button>
  )
}

export default RegistrationWN
