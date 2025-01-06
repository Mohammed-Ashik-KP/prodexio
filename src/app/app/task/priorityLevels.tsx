import Chip from "@/components/chip/chip";
import Label from "@/components/label/label";
import { TASK_PRIOTIY_LEVELS } from "@/lib/constants";
import { PriorityLevelValueEnum, SelectableOption } from "@/types";
import React, { useEffect, useState } from "react";

const PriorityLevels: React.FC<{
  onSelect: (value: SelectableOption<PriorityLevelValueEnum> | null) => void;
}> = ({ onSelect }) => {
  const [selectedLevel, setSelectedLevel] =
    useState<SelectableOption<PriorityLevelValueEnum> | null>(null);

  useEffect(() => {
    if (onSelect) {
      onSelect(selectedLevel);
    }
  }, [onSelect, selectedLevel]);
  return (
    <div className="space-y-2">
      <Label label="Choose Priority Level" />
      <div className="flex items-center gap-3 flex-wrap">
        {TASK_PRIOTIY_LEVELS.map((level) => {
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

export default PriorityLevels;
