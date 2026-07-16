"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";
interface Props {
  interviewId: number;
}

export default function DeleteInterviewDialog({
  interviewId,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const deleteInterview = async () => {
    const toastId = toast.loading("Deleting interview...");
    
    try {
      setLoading(true);

      const res = await fetch(
        `/api/interview/${interviewId}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete interview");
      }

      const data = await res.json();

      if (data.success) {
        toast.dismiss(toastId);
        toast.success("Interview deleted successfully!");
        setOpen(false);
        router.refresh();
      } else {
        throw new Error(data.message || "Failed to delete interview");
      }
    } catch (err) {
      toast.dismiss(toastId);
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          size="sm"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Delete Interview
          </DialogTitle>

          <DialogDescription>
            This action cannot be undone.

            <br />
            <br />

            The interview and all related feedback
            will be permanently deleted.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>

          <Button
            variant="outline"
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={deleteInterview}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </>
            )}
          </Button>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}