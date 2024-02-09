const DividerOrientation = ['left', 'center', 'right'] as const;
export type NgxOrientation = (typeof DividerOrientation)[number];
