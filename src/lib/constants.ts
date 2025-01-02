import {
  ChipVariants,
  PriorityLevelValueEnum,
  TaskEffortLevelValueEnum,
} from "@/types";

export const TASK_PRIOTIY_LEVELS: {
  label: string;
  value: PriorityLevelValueEnum;
  theme?: ChipVariants;
}[] = [
  {
    label: "Top Priority",
    value: PriorityLevelValueEnum.TOP_PRIORITY,
    theme: "red",
  },
  {
    label: "Important",
    value: PriorityLevelValueEnum.IMPORTANT,
    theme: "orange",
  },
  {
    label: "Supportive",
    value: PriorityLevelValueEnum.SUPPORTIVE,
    theme: "yellow",
  },
  {
    label: "For Later",
    value: PriorityLevelValueEnum.FOR_LATER,
    theme: "blue",
  },
  {
    label: "Nice to Have",
    value: PriorityLevelValueEnum.NICE_TO_HAVE,
    theme: "green",
  },
];

export const TASK_EFFORT_LEVELS: {
  label: string;
  value: TaskEffortLevelValueEnum;
  theme?: ChipVariants;
}[] = [
  {
    label: "Quick Win",
    value: TaskEffortLevelValueEnum.QUICK_WIN,
    theme: "green",
  },
  {
    label: "Steady Work",
    value: TaskEffortLevelValueEnum.STEADY_WORK,
    theme: "blue",
  },
  {
    label: "Deep Focus",
    value: TaskEffortLevelValueEnum.DEEP_FOCUS,
    theme: "yellow",
  },
  {
    label: "Big Push",
    value: TaskEffortLevelValueEnum.BIG_PUSH,
    theme: "orange",
  },

  {
    label: "Full Commitment",
    value: TaskEffortLevelValueEnum.FULL_COMMITMNET,
    theme: "red",
  },
];
