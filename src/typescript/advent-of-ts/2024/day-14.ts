export type PerfReview<T> =
  T extends AsyncGenerator<infer U> ? U : never;
// Generator<infer U>, this wors but when the generation function is not async
