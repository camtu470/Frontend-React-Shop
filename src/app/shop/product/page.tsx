interface Props {
  params: { id: string };
}

export default function ProductDetail({ params }: Props) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Product Detail - ID: {params.id}</h1>
      {/* Product details go here */}
    </main>
  );
}
