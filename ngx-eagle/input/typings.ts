const Type = [
  'text',
  'email',
  'number',
  'password',
  'search',
  'tel',
  'url',
  'textarea',
] as const;
export type NgxType = (typeof Type)[number];
