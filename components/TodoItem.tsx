"use client";

import React from "react";
import { Todo } from "@/types/todo";
import { Check, Pencil, Trash2 } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string, newStatus: "Pending" | "Completed") => void;
  onEdit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  disabled?: boolean;
}

export default function TodoItem({
  todo,
  onToggle,
  onEdit,
  onDelete,
  disabled = false,
}: TodoItemProps) {
  const isCompleted = todo.status === "Completed";
  const targetStatus = isCompleted ? "Pending" : "Completed";

  return (
    <div
      className={`group flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
        isCompleted
          ? "bg-white/[0.02] border-white/5 opacity-70"
          : "bg-white/[0.05] border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
      }`}
    >
      <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
        {/* Custom Toggle Checkbox */}
        <button
          type="button"
          onClick={() => onToggle(todo.id, targetStatus)}
          disabled={disabled}
          aria-label={isCompleted ? "Mark task as pending" : "Mark task as completed"}
          className={`shrink-0 w-6 h-6 rounded-lg border flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#fb9826]/50 ${
            isCompleted
              ? "bg-[#fb9826] border-[#fb9826] text-[#091b20]"
              : "border-white/30 hover:border-[#fb9826] text-transparent"
          }`}
        >
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </button>

        {/* Task Name */}
        <span
          onClick={() => onToggle(todo.id, targetStatus)}
          className={`cursor-pointer text-[0.95rem] sm:text-[1rem] leading-relaxed select-none transition-all duration-200 break-words ${
            isCompleted
              ? "line-through text-white/40"
              : "text-white group-hover:text-white"
          }`}
        >
          {todo.name}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={() => onEdit(todo)}
          disabled={disabled}
          aria-label="Edit task"
          className="p-2 text-white/40 hover:text-[#fb9826] hover:bg-[#fb9826]/10 rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#fb9826]/40"
        >
          <Pencil className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => onDelete(todo)}
          disabled={disabled}
          aria-label="Delete task"
          className="p-2 text-white/40 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

