export type PriorityLevelName =
  | "TOP_PRIORITY"
  | "IMPORTANT"
  | "SUPPORTIVE"
  | "FOR_LATER"
  | "NICE_TO_HAVE";

export type TaskEffortLevelName =
  | "QUICK_WIN"
  | "STEADY_WORK"
  | "DEEP_FOCUS"
  | "BIG_PUSH"
  | "FULL_COMMITMENT";

export enum PriorityLevelValueEnum {
  "TOP_PRIORITY" = 5,
  "IMPORTANT" = 4,
  "SUPPORTIVE" = 3,
  "FOR_LATER" = 2,
  "NICE_TO_HAVE" = 1,
}

export enum TaskEffortLevelValueEnum {
  "QUICK_WIN" = 1,
  "STEADY_WORK" = 2,
  "DEEP_FOCUS" = 3,
  "BIG_PUSH" = 4,
  "FULL_COMMITMNET" = 5,
}


export type SelectableOption<T> = {
  label: string,
  value: T,
  id?: string | number
} 

export type ChipVariants =
 "default" | "red" | "green" | "orange" | "yellow" | "blue" | "none" | null | undefined
