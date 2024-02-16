
const TimelineModes = ['left', 'alternate', 'right', 'custom'] as const;
export type NgxTimelineMode = (typeof TimelineModes)[number];

const TimelinePositions = ['left', 'right'] as const;
export type NgxTimelinePosition = (typeof TimelinePositions)[number];

