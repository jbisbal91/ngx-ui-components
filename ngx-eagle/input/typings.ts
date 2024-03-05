const FormFieldSize = ['small', 'medium', 'large'] as const;
export type NgxSize = (typeof FormFieldSize)[number];

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

const FormFieldRounded = ['small', 'medium', 'large'] as const;
export type NgxRounded = (typeof FormFieldRounded)[number];

export const FormFieldFillMode = ['filled', 'outlined'] as const;
export type NgxFillMode = (typeof FormFieldFillMode)[number];
