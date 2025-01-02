"use client";

import { Button } from "@/components/button/button";
import Chip from "@/components/chip/chip";
import InputBox from "@/components/inputBox/inputBox";
import Label from "@/components/label/label";
import PriorityLevels from "./priorityLevels";
import EffortLevels from "./effortLevels";
import TextareaBox from "@/components/textareaBox/textareaBox";

const TaskPage = () => {
  //constants

  //hooks

  //states

  //fncs

  //effects
  return (
    <div className="w-full flex flex-col gap-6 mt-4 ">
      <div className="flex justify-center w-full gap-10">
        <div className="flex flex-col max-w-screen-md w-full gap-3 rounded-lg bg-white p-4 shadow-md">
          <InputBox
            name=""
            label="Add You New Task"
            className="w-full"
            onChange={(value) => {
              console.log(value);
            }}
            inputClass="capitalize"
          />

          
          <TextareaBox 
          name=""
          label="Description"
          className="w-full"
          onChange={(value) => {
            console.log(value);
          }}
          inputClass="capitalize resize-none"
         
          />

          <div className="flex flex-col gap-y-4">
            <div>
              <PriorityLevels />
            </div>

            <div>
              <EffortLevels />
            </div>
          </div>

          {/* <Label label="Choose Energy Level"/>
          <div className="flex items-center gap-3">
            <Chip label="First" id="first" variant="yellow"  showCloseButton selected></Chip>
            <Chip label="First" id="first" variant="blue" selected></Chip>
            <Chip label="First" id="first" showCloseButton selected></Chip>
          </div> */}
          <div className="flex items-center justify-end my-4">
            <Button label="Add Task" type="submit" />
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
