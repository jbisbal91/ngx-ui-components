
const BadgeSize = ['small', 'medium', 'large'] as const;
export type NgxSize = (typeof BadgeSize)[number];

const BadgePosition = ['before', 'after'] as const;
export type NgxPosition = (typeof BadgePosition)[number];

