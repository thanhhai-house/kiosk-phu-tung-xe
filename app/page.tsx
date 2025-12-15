import Link from "next/link";
import { parts } from "@/lib/parts";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Kiosk Phụ Tùng Xe</h1>
            <p className="text-sm text-zinc-600">Tra cứu nhanh • Giá rõ • Tồn kho</p>
          </div>
          <Link className="text-sm font-medium underline" href="/admin">
            Admin
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm border">
            <p className="text-sm text-zinc-600">Tổng sản phẩm</p>
            <p className="text-2xl font-semibold">{parts.length}</p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border">
            <p className="text-sm text-zinc-600">Danh mục</p>
            <p className="text-2xl font-semibold">
              {new Set(parts.map((p) => p.category)).size}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border">
            <p className="text-sm text-zinc-600">Hãng xe</p>
            <p className="text-2xl font-semibold">
              {new Set(parts.flatMap((p) => p.compatible)).size}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold">Sản phẩm</h2>
          <p className="text-sm text-zinc-600">Bấm để xem chi tiết sản phẩm</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {parts.map((p) => (
              <Link
                key={p.sku}
                href={`/p/${p.sku}`}
                className="rounded-2xl border p-4 hover:shadow-sm transition bg-white"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-sm text-zinc-600">
                      {p.category} • SKU: {p.sku}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border ${
                      p.stock > 0 ? "bg-green-50" : "bg-red-50"
                    }`}
                  >
                    {p.stock > 0 ? `Còn ${p.stock}` : "Hết hàng"}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    {Intl.NumberFormat("vi-VN").format(p.price)}₫
                  </p>
                  <p className="text-xs text-zinc-500">
                    {p.compatible.slice(0, 2).join(", ")}
                    {p.compatible.length > 2 ? "…" : ""}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
