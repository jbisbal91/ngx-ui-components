
const TimelineModes = ['left', 'alternate', 'right', 'custom'] as const;
export type NgxTimelineMode = (typeof TimelineModes)[number];

const TimelinePositions = ['left', 'right'] as const;
export type NgxTimelinePosition = (typeof TimelinePositions)[number];

export const TimelineTimeDefaultColors = ['red', 'blue', 'green', 'grey', 'gray'] as const;
export type NgxTimelineItemColor = (typeof TimelineTimeDefaultColors)[number];
