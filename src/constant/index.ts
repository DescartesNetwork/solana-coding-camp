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

export const UNSUPPORT_PROJECT = [
  '2MDZuyz5NRRLNtauwCUhsrn1VkF9LuzwCEQASFJfegmF',
  'DxpGAoGNg83gSuzU6GkcM69fDFd6jSrq5sKu5oGyHQDW',
  'GVSH5qQuMj2o7CG8mTWZg421pkC7bL8WrYUZHFD5Hkzi',
  'CznfND3DbkyA2wE7WgWtfsGNhdxEwk63tzhjX5oAemTf',
  'FcTx5TgZfyQkDcFpfxf8TWMzLk99GCvTuwmsu54hixwJ',
  'DucEvim9Zu3PzzctWHoWjXLU2ALoSjpvNkZR5Pdyvh4Q',
  '3cBDbJ95HjrUPnPtmuLGRqMPMB2bzZ5LP2FoVUhPFGAR',
  'BBMBWf7aoC2D8yLdVDV7nCqEyGWRzqGicd27gqep5v3Y',
  'GvgPrskmxet8UZRXFuTgAbDT3YYYpS5Wvr4bJXGwYFMr',
  '8gnoyvs2jKvCtCNdnHnTZa5eQtdhf683k4azd8Mz199C',
  'BZhsshizXKQeoRZjtcHDhsCsqPjL7DJkaRDBKrcWAJMZ',
  '7YUZRvfVpUJBZwKS5iCSBoHQuabsyKRJEEZ5GKXnZ6n6',
  '3qf1jaVBJWrEPvNhL5Aojg1jCWC2R3cMuTCamQ2qUppb',
]
