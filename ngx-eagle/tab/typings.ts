const TabGroupPosition = ['top', 'left', 'right'] as const;
export type NgxTabPosition = (typeof TabGroupPosition)[number];

const TabGroupAlign = ['start', 'center', 'end'] as const;
export type NgxAlignTabs = (typeof TabGroupAlign)[number];

const TabGroupMode = ['default', 'closeable'] as const;
export type NgxMode = (typeof TabGroupMode)[number];
