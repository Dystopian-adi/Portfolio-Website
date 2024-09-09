export const metadata = {
  title: 'Aditya Bhatt',
  description: 'Designed Aditya Bhatt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
