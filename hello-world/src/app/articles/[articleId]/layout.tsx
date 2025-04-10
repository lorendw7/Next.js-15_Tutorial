import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial - CodeVolution",
    template: "%s | CodeVolution",
    absolute: ""
  },
  description: 'Generated by Next.js',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: Promise<{ articleId: string }>,
}) {
  const { articleId } = await params;

  return (
    <div>
      <h3>{articleId}</h3>
      {children}
    </div>
  )
}
