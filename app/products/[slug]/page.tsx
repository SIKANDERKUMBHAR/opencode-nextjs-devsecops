import { notFound } from "next/navigation";
import ProductDetail from "@/components/sections/product-detail";
import { products } from "@/utils/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    notFound();
  }

  return (
    <main className="pt-32">
      <ProductDetail product={product} />
    </main>
  );
}
