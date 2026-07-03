interface Props {
  params: {
    interviewId: string;
  };
}

export default function InterviewPage({ params }: Props) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Interview ID : {params.interviewId}
      </h1>
    </div>
  );
}