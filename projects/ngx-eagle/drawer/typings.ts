const DrawerPlacement = ['top', 'right', 'bottom', 'left'] as const;
export type NgxDrawerPlacement = (typeof DrawerPlacement)[number];
