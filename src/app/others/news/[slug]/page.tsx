interface Props {
  params: { slug: string };
}

export default function NewsDetail({ params }: Props) {
  return (
    <main className="p-4">
      <h2 className="text-2xl font-bold">
        News: {params.slug.replace("-", " ")}
      </h2>
      {/* Full article content */}
    </main>
  );
}
