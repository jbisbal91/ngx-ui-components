
const ButtonSize = ['small', 'medium', 'large'] as const;
export type NgxSize = (typeof ButtonSize)[number];

const ButtonRounded = ['small', 'medium','large','full'] as const;
export type NgxRounded = (typeof ButtonRounded)[number];

export const ButtonFillMode = ['filled', 'outlined', 'text', 'elevated'] as const;
export type NgxFillMode = (typeof ButtonFillMode)[number];
