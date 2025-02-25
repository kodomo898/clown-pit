import Link from "next/link";

export default function Navigation() {
  const mainNavItems = [
    {
      title: "ホーム",
      href: "/",
      description: "ClownPitのホームページ"
    },
    {
      title: "サービス",
      href: "/services",
      description: "提供サービスの詳細"
    },
    {
      title: "会社概要",
      href: "/about",
      description: "ClownPitについて"
    },
    {
      title: "お問い合わせ",
      href: "/contact",
      description: "お問い合わせフォーム"
    }
  ];

  return (
    <nav aria-label="メインナビゲーション">
      <ul role="list" className="flex space-x-4">
        {mainNavItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm hover:text-gray-600"
              aria-label={item.description}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 