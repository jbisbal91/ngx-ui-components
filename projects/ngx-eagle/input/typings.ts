
const InputSize = ['small', 'medium', 'large'] as const;
export type NgxSize = (typeof InputSize)[number];

export const InputFillMode = ['filled', 'outlined'] as const;
export type NgxFillMode = (typeof InputFillMode)[number];
