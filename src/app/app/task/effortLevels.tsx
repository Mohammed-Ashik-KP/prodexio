import Chip from "@/components/chip/chip";
import Label from "@/components/label/label";
import { TASK_EFFORT_LEVELS } from "@/lib/constants";
import {  SelectableOption, TaskEffortLevelValueEnum } from "@/types";
import React, { useState } from "react";

const EffortLevels = () => {
  const [selectedLevel, setSelectedLevel] =
    useState<SelectableOption<TaskEffortLevelValueEnum> | null>();
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
              selected={selectedLevel?.value === level.value}
              onClick={() => {
                if (selectedLevel?.value === level.value) {
                  setSelectedLevel(null);
                } else {
                  setSelectedLevel({ label: level.label, value: level.value });
                }
              }}
              variant={level.theme}
              showCloseButton={selectedLevel?.value === level.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EffortLevels;
