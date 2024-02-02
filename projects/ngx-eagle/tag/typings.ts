const TagMode = ['default', 'closeable', 'checkable', 'sync'] as const;
export type NgxMode = (typeof TagMode)[number];

