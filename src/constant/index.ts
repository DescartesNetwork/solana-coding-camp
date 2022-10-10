import pen from 'static/images/timeline/pen.svg'
import people from 'static/images/timeline/people.svg'
import send from 'static/images/timeline/send.svg'
import recorder from 'static/images/timeline/recorder.svg'
import cup from 'static/images/timeline/cup.svg'

export const MAX_WIDTH = 1300

export const TIME_LINE = [
  {
    title: 'Registration form',
    icon: pen,
    fromDate: '10/10/2022',
    toDate: '11/13/2022',
  },
  {
    title: 'Workshops series',
    icon: people,
    fromDate: '11/14/2022',
    toDate: '12/11/2022',
  },
  {
    title: 'DApp submission',
    icon: send,
    fromDate: '12/12/2022',
    toDate: '12/16/2022',
  },
  {
    title: 'Demo day',
    icon: recorder,
    fromDate: '12/17/2022',
    toDate: '12/18/2022',
  },
  {
    title: 'Award night',
    icon: cup,
    fromDate: '12/21/2022',
    toDate: undefined,
  },
]

export const PATH_GOOGLE_VIEW_IMG =
  'https://drive.google.com/uc?export=view&id='

export const TYPE_FORM_ID = 'hyibBZhP'
