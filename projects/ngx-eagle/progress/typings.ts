const AvatarSize = ['large', 'small', 'default'] as const;
export type NgxSize = (typeof AvatarSize)[number];

