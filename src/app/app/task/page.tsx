"use client";

import { Button } from "@/components/button/button";
import Checkbox from "@/components/checkbox/checkbox";
import Input from "@/components/input/input";
import TextareaBox from "@/components/textarea/textarea";
import EffortLevels from "./effortLevels";
import TaskHeader from "./header";
import PriorityLevels from "./priorityLevels";
import { useForm } from "react-hook-form";
import { useCreateTask } from "@/api/hooks/task";

const TaskPage = () => {
  //constants

  //hooks

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm({});

  const { mutateAsync: createTask, isPending } = useCreateTask();

  //states

  //fncs
  const onSubmit = async (values) => {
    const response = await createTask(values);
    if (!response.error) {
      reset({
        title: "",
        description: "",
        effortLevel: "",
        priorityLevel: "",
      });
    }
  };

  //effects
  return (
    <div className="w-full flex flex-col gap-6 mt-4 h-full overflow-auto">
      <TaskHeader />
      <div className="flex justify-center w-full gap-10">
        <div className="flex flex-col max-w-screen-md w-full gap-3 rounded-lg bg-white p-4 shadow-md">
          <Input
            name="title"
            label="Add You New Task"
            className="w-full"
            register={register}
            errors={errors}
            inputClassName="capitalize"
          />

          <TextareaBox
            name="description"
            label="Description"
            className="w-full"
            register={register}
            errors={errors}
            inputClassName="capitalize resize-none"
          />

          <div className="flex flex-col gap-y-4">
            <div>
              <PriorityLevels
                value={getValues().priorityLevel}
                onSelect={(value) => {
                  setValue("priorityLevel", value);
                }}
              />
            </div>

            <div>
              <EffortLevels
                value={getValues().effortLevel}
                onSelect={(value) => {
                  setValue("effortLevel", value);
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-end my-4">
            <Button
              label="Add Task"
              type="submit"
              onClick={handleSubmit(onSubmit)}
              isLoading={isPending}
            />
          </div>
        </div>
      </div>
      {/* <div className="w-full">
        <DataTable
          columns={[
            {
              header: "Name",
              id: "name",
            },
            {
              header: "Age",
              id: "age",
            },
          ]}
          data={[
            { name: "John", age: 12, id: "1" },
            { name: "John2", age: 13, id: "2" },
          ]}
          id="tasks"
        />
      </div> */}
    </div>
  );
};

export default TaskPage;
