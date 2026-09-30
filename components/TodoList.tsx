"use client";

import React, { useState, useEffect } from "react";
import { Todo } from "@/types/todo";
import TodoItem from "@/components/TodoItem";
import { Plus, CheckCircle2, ListTodo, AlertCircle, Loader2, X } from "lucide-react";

type DialogType = "edit" | "delete" | null;

interface TodoDialogState {
  type: DialogType;
  todo: Todo | null;
  draftTitle: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [dialogState, setDialogState] = useState<TodoDialogState>({
    type: null,
    todo: null,
    draftTitle: "",
  });
  const [dialogLoading, setDialogLoading] = useState(false);

  // 1. Initial fetch from GET /api/todos (MongoDB)
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/todos");
        const result = await res.json();
        if (res.ok && result.success && Array.isArray(result.data)) {
          setTodos(result.data);
        } else {
          setErrorMessage(result.error || "Failed to fetch tasks from server.");
        }
      } catch (err) {
        console.error("Failed to fetch todos:", err);
        setErrorMessage("Unable to connect to server. Please check your connection.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    if (!dialogState.type) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !dialogLoading) {
        setDialogState({ type: null, todo: null, draftTitle: "" });
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [dialogState.type, dialogLoading]);

  const closeDialog = () => {
    setDialogState({ type: null, todo: null, draftTitle: "" });
  };

  // Add Task Handler via fetch POST /api/todos
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = inputValue.trim();
    if (!cleanName) {
      setErrorMessage("Please enter a task description.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: cleanName }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to add task.");
      }

      const newTodo: Todo = result.data;
      setTodos((prev) => [newTodo, ...prev]);
      setInputValue("");
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while adding the task. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle Completion Handler via fetch PUT /api/todos/[id]
  const handleToggleTodo = async (id: string, newStatus: "Pending" | "Completed") => {
    setErrorMessage(null);

    try {
      const response = await fetch(`/api/todos/${encodeURIComponent(id)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to update task.");
      }

      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, status: result.data.status } : t))
      );
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while updating the task.");
    }
  };

  const handleEditTodo = (todo: Todo) => {
    setDialogState({ type: "edit", todo, draftTitle: todo.name });
    setErrorMessage(null);
  };

  const handleDeleteDialog = (todo: Todo) => {
    setDialogState({ type: "delete", todo, draftTitle: todo.name });
    setErrorMessage(null);
  };

  const handleUpdateTodo = async () => {
    const currentTodo = dialogState.todo;
    const cleanName = dialogState.draftTitle.trim();

    if (!currentTodo) {
      return;
    }

    if (!cleanName) {
      setErrorMessage("Task name cannot be empty.");
      return;
    }

    setDialogLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`/api/todos/${encodeURIComponent(currentTodo.id)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: cleanName }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to update task.");
      }

      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === currentTodo.id ? { ...todo, name: result.data.name } : todo
        )
      );
      closeDialog();
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while updating the task.");
    } finally {
      setDialogLoading(false);
    }
  };

  const handleDeleteTodo = async () => {
    const currentTodo = dialogState.todo;

    if (!currentTodo) {
      return;
    }

    setDialogLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`/api/todos/${encodeURIComponent(currentTodo.id)}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to delete task.");
      }

      setTodos((prev) => prev.filter((todo) => todo.id !== currentTodo.id));
      closeDialog();
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while deleting the task.");
    } finally {
      setDialogLoading(false);
    }
  };

  const completedCount = todos.filter((t) => t.status === "Completed").length;
  const totalCount = todos.length;

  const dialogTitle =
    dialogState.type === "edit" ? "Edit task" : dialogState.type === "delete" ? "Delete task" : "";

  const dialogDescription =
    dialogState.type === "edit"
      ? "Update the task name below."
      : dialogState.type === "delete"
        ? `Are you sure you want to delete "${dialogState.todo?.name || "this task"}"?`
        : "";


  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Task Creation Form */}
      <form onSubmit={handleAddTodo} className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (errorMessage) setErrorMessage(null);
              }}
              placeholder="e.g. Confirm flight schedule, pack hiking shoes..."
              className="w-full h-14 rounded-2xl bg-white/[0.05] border border-white/10 px-5 text-white placeholder:text-white/35 focus:outline-none focus:border-[#fb9826] focus:ring-1 focus:ring-[#fb9826] transition-all text-[0.95rem]"
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !inputValue.trim()}
            className="h-14 px-7 rounded-2xl bg-[#fb9826] text-[#091b20] font-semibold text-[0.95rem] hover:bg-[#fa8805] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shrink-0 disabled:opacity-50 disabled:pointer-events-none cursor-pointer shadow-lg shadow-[#fb9826]/10"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Plus className="w-5 h-5 stroke-[2.5]" />
                <span>Add Task</span>
              </>
            )}
          </button>
        </div>

        {/* Error notification banner */}
        {errorMessage && (
          <div className="mt-3.5 flex items-center gap-2.5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm animate-in fade-in duration-200">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}
      </form>

      {/* Stats Counter & Controls */}
      <div className="flex items-center justify-between py-3 mb-4 border-b border-white/10 text-xs sm:text-sm text-white/50">
        <div className="flex items-center gap-2">
          <ListTodo className="w-4 h-4 text-[#fb9826]" />
          <span>
            {totalCount === 0
              ? "0 tasks"
              : `${completedCount} of ${totalCount} completed`}
          </span>
        </div>
        {totalCount > 0 && completedCount === totalCount && (
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>All done!</span>
          </div>
        )}
      </div>

      {/* Main Content Area: Loading / Empty / List */}
      {isLoading ? (
        <div className="py-16 flex flex-col items-center justify-center gap-3 text-white/50">
          <Loader2 className="w-7 h-7 animate-spin text-[#fb9826]" />
          <p className="text-sm font-medium">Loading your list...</p>
        </div>
      ) : todos.length === 0 ? (
        <div className="py-16 px-6 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4 text-[#fb9826]">
            <ListTodo className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium text-white mb-1.5">No tasks yet</h3>
          <p className="text-white/40 text-sm max-w-sm">
            Keep track of your travel checklist, packing notes, and retreat preparations here.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggleTodo}
              onEdit={handleEditTodo}
              onDelete={handleDeleteDialog}
            />
          ))}
        </div>
      )}

      {dialogState.type && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#091b20]/75 p-4 backdrop-blur-sm"
          onClick={() => {
            if (!dialogLoading) {
              closeDialog();
            }
          }}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0d1d22] shadow-2xl shadow-[#040d11]/40"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <h3 className="text-lg font-semibold text-white">{dialogTitle}</h3>
              <button
                type="button"
                onClick={closeDialog}
                disabled={dialogLoading}
                aria-label="Close dialog"
                className="rounded-lg p-1.5 text-white/60 transition-colors hover:bg-white/5 hover:text-white disabled:pointer-events-none disabled:opacity-40"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-5">
              {dialogState.type === "edit" ? (
                <>
                  <p className="mb-3 text-sm text-white/70">{dialogDescription}</p>
                  <label className="block text-xs font-medium uppercase tracking-[0.14em] text-white/50 mb-2">
                    Task title
                  </label>
                  <input
                    type="text"
                    value={dialogState.draftTitle}
                    onChange={(event) =>
                      setDialogState((current) => ({
                        ...current,
                        draftTitle: event.target.value,
                      }))
                    }
                    disabled={dialogLoading}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-white placeholder:text-white/35 focus:border-[#fb9826] focus:outline-none focus:ring-1 focus:ring-[#fb9826]"
                    placeholder="Enter task title"
                  />
                </>
              ) : (
                <p className="text-sm leading-relaxed text-white/75">{dialogDescription}</p>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-white/10 px-5 py-4">
              <button
                type="button"
                onClick={closeDialog}
                disabled={dialogLoading}
                className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/25 hover:bg-white/[0.06] disabled:pointer-events-none disabled:opacity-40"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={dialogState.type === "edit" ? handleUpdateTodo : handleDeleteTodo}
                disabled={dialogLoading}
                className="inline-flex items-center justify-center rounded-full bg-[#fb9826] px-4 py-2 text-sm font-semibold text-[#091b20] transition-colors hover:bg-[#fa8805] disabled:pointer-events-none disabled:opacity-60"
              >
                {dialogLoading ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {dialogState.type === "edit" ? "Updating..." : "Deleting..."}
                  </span>
                ) : dialogState.type === "edit" ? (
                  "Update"
                ) : (
                  "Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
