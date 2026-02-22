import { notFound } from "next/navigation";
import ProductDetail from "@/components/sections/product-detail";
import { products } from "@/utils/products";

type ProductPageProps = {
  params: { slug: string };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    notFound();
  }

  return (
    <main className="pt-32">
      <ProductDetail product={product} />
    </main>
  );
}
