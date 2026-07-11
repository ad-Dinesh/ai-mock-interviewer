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

interface Props {
  interviewId: number;
}

export default function DeleteInterviewDialog({
  interviewId,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const deleteInterview = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `/api/interview/${interviewId}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
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