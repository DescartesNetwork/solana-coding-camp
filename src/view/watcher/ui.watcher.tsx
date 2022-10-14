import { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { notification } from 'antd'

import { AppDispatch } from 'store'
import { resize } from 'store/ui.reducer'
import IonIcon from '@sentre/antd-ionicon'

const UIWatcher = () => {
  const [api, contextHolder] = notification.useNotification()
  const dispatch = useDispatch<AppDispatch>()

  // Notification system
  window.notify = ({
    type,
    description,
    onClick = () => {},
  }: AcademyNotification) => {
    return api[type]({
      message: type.toUpperCase(),
      description,
      onClick,
      style: { cursor: 'pointer' },
      closeIcon: <IonIcon name="close-outline" />,
    })
  }

  // Listen window events
  useEffect(() => {
    window.onresize = () => dispatch(resize())
  }, [dispatch])

  return <Fragment>{contextHolder}</Fragment>
}

export default UIWatcher
