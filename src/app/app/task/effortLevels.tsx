import Chip from "@/components/chip/chip";
import Label from "@/components/label/label";
import { TASK_EFFORT_LEVELS } from "@/lib/constants";
import { TaskEffortLevelValueEnum } from "@/types";
import React, { useEffect, useState } from "react";

const PriorityLevels: React.FC<{
  value?: TaskEffortLevelValueEnum | null;
  onSelect: (value: TaskEffortLevelValueEnum | null) => void;
}> = ({ onSelect, value }) => {
  const [selectedLevel, setSelectedLevel] =
    useState<TaskEffortLevelValueEnum | null>(null);

  useEffect(() => {
    if (onSelect) {
      onSelect(selectedLevel);
    }
  }, [onSelect, selectedLevel]);

  useEffect(() => {
    setSelectedLevel(value || null);
  }, [value]);

  return (
    <div className="space-y-2">
      <Label label="Choose Effort Level" />
      <div className="flex items-center gap-3 flex-wrap">
        {TASK_EFFORT_LEVELS.map((level) => {
          return (
            <Chip
              key={`task_${level.label}`}
              id={level.label}
              label={level.label}
              selected={selectedLevel === level.value}
              onClick={() => {
                if (selectedLevel === level.value) {
                  setSelectedLevel(null);
                } else {
                  setSelectedLevel(level.value);
                }
              }}
              variant={level.theme}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PriorityLevels;
