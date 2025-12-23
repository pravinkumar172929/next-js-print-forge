export default async function CategoryPage({ params }) {
  const { categoryName } = await params;
  return (
    <>
      <h1>CategoryPage</h1>
      <p>{categoryName}</p>
    </>
  );
}
