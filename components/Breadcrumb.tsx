import Link from 'next/link';

export default function Breadcrumb({ name }: { name: string }) {
  return (
    <nav className="text-gray-600 mb-4">
      <Link href="/" className="text-blue-500 hover:underline">Home</Link>
      <span className="mx-2">→</span>
      <span className="font-semibold capitalize">{name}</span>
    </nav>
  );
}
