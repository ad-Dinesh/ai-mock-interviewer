interface Props {
  params: Promise<{
    interviewId: string;
  }>;
}

export default async function FeedbackPage({ params }: Props) {
  const { interviewId } = await params;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Interview Feedback
      </h1>

      <p className="mt-5">
        Interview Id : {interviewId}
      </p>
    </div>
  );
}