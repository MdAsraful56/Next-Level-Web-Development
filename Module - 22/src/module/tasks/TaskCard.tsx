// import React from 'react';

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITask } from "@/Types/types";
// import { Checkbox } from "@radix-ui/react-checkbox";
import { Trash2 } from "lucide-react";

interface IProps {
    task: ITask;
}


const TaskCard = ({ task }: IProps) => {
    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full", {
                        "bg-green-500": task.isCompleted === true,
                        "bg-red-600": !task.isCompleted === false
                    })}></div>
                    <h1 className="text-xl">{task.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button variant={"link"} className="p-0 text-red-500">
                        <Trash2 />
                    </Button>
                    <Checkbox />
                </div>
            </div>
            <p className="mt-3 ml-5">{task.description}</p>
        </div>
    );
};

export default TaskCard;