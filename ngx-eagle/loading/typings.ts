const SpinnerType = ['bars', 'dots',] as const;
export type SpinnerType = (typeof SpinnerType)[number];