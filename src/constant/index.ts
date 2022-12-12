import { enLanguage } from 'static/languages/en'
import { vnLanguage } from 'static/languages/vn'

export const MAX_WIDTH = 1200

export const PATH_GOOGLE_VIEW_IMG =
  'https://drive.google.com/uc?export=view&id='

export const TYPE_FORM_ID = 'hyibBZhP'

export type LanguageType = 'en' | 'vn'

export const DEFAULT_SYSTEM: Record<LanguageType, any> = {
  en: enLanguage,
  vn: vnLanguage,
}

export enum TabsKey {
  WhyJoin = 'why-join',
  WhoCanJoin = 'who-can-join',
  HowToJoin = 'how-to-join',
}

export const BTN_REGISTER_ID = 'btn_register_id'
export const BTN_SUBMIT_ID = 'btn_submit_id'

export enum CertificateState {
  Completion = 'Completion',
  Participation = 'Participation',
}

export enum AwardNightTabs {
  Date = 'Date',
  Time = 'Time',
  Location = 'Location',
}
