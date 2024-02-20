const SwitchSize = ['large', 'small', 'default'] as const;
export type NgxSize = (typeof SwitchSize)[number];