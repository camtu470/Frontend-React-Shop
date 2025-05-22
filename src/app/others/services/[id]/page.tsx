interface Props {
  params: { id: string };
}

export default function ServiceDetailPage({ params }: Props) {
  return (
    <main className="p-4">
      <h2 className="text-xl font-bold">Service ID: {params.id}</h2>
      {/* Detailed service info */}
    </main>
  );
}
