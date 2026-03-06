import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'LivroSaas',
  description:
    'Deixe que nós fazermos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="pt-br" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}