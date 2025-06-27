// import React from 'react';

import TaskCard from "@/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {


    const tasks = useAppSelector(selectTasks);

    console.log("Tasks:", tasks);

    return (
        <div>
            <div className="">
                <h1>Tasks</h1>
            </div>
            <div className="space-y-4 mt-5">
                {
                    tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))
                }
            </div>
        </div>
    );
};

export default Task;