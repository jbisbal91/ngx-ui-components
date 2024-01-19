
const FormFieldSize = ['small', 'medium', 'large'] as const;
export type NgxSize = (typeof FormFieldSize)[number];

const FormFieldRounded = ['small', 'medium','large','full'] as const;
export type NgxRounded = (typeof FormFieldRounded)[number];

export const FormFieldFillMode = ['filled', 'outlined'] as const;
export type NgxFillMode = (typeof FormFieldFillMode)[number];