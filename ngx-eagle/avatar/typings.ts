const AvatarSize = ['large', 'small', 'default'] as const;
export type NgxSize = (typeof AvatarSize)[number];

const AvatarShape = ['circle', 'square'] as const;
export type NgxShape = (typeof AvatarShape)[number];
