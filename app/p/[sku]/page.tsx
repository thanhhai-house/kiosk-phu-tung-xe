import Link from "next/link";
import { notFound } from "next/navigation";
import { parts } from "@/lib/parts";

export default function PartDetail({ params }: { params: { sku: string } }) {
  const p = parts.find((x) => x.sku === params.sku);
  if (!p) return notFound();

  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-3xl px-4 py-4">
          <Link className="text-sm underline" href="/">
            ← Về danh sách
          </Link>
          <h1 className="mt-2 text-2xl font-semibold">{p.name}</h1>
          <p className="text-sm text-zinc-600">
            {p.category} • SKU: {p.sku}
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 py-6">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold">
              {Intl.NumberFormat("vi-VN").format(p.price)}₫
            </p>
            <span
              className={`text-xs px-2 py-1 rounded-full border ${
                p.stock > 0 ? "bg-green-50" : "bg-red-50"
              }`}
            >
              {p.stock > 0 ? `Còn ${p.stock}` : "Hết hàng"}
            </span>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium">Mô tả</p>
            <p className="text-sm text-zinc-700 mt-1">{p.desc}</p>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium">Tương thích hãng xe</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.compatible.map((b) => (
                <span key={b} className="text-xs px-2 py-1 rounded-full border bg-zinc-50">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            <div className="rounded-xl border p-3 bg-zinc-50">
              <p className="text-xs text-zinc-600">Nhà cung cấp</p>
              <p className="text-sm font-medium">{p.supplier}</p>
            </div>
            <div className="rounded-xl border p-3 bg-zinc-50">
              <p className="text-xs text-zinc-600">Bảo hành</p>
              <p className="text-sm font-medium">{p.warranty}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
