import Link from "next/link";
import { parts } from "@/lib/parts";

export default function Admin() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Admin (demo)</h1>
            <p className="text-sm text-zinc-600">Xem tồn kho / giá (chưa có đăng nhập)</p>
          </div>
          <Link className="text-sm underline" href="/">
            ← Quay lại
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 border-b">
              <tr>
                <th className="text-left p-3">SKU</th>
                <th className="text-left p-3">Tên</th>
                <th className="text-left p-3">Danh mục</th>
                <th className="text-right p-3">Giá</th>
                <th className="text-right p-3">Tồn</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((p) => (
                <tr key={p.sku} className="border-b last:border-b-0">
                  <td className="p-3 font-mono">{p.sku}</td>
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.category}</td>
                  <td className="p-3 text-right">
                    {Intl.NumberFormat("vi-VN").format(p.price)}₫
                  </td>
                  <td className="p-3 text-right">{p.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
