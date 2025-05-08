// app/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import AppProvider from "@/providers/appProvider";
import Header from "@/views/share/header";
import Footer from "@/views/share/footer";

export const metadata: Metadata = {
  icons: "/logo.png",
  title: "Home - GWR Nano Insulation",
  description:
    "GWR NANO INSULATION® Born to change insulation Our goal is to provide quality, efficient energy-saving for a sustainable future.    Request information Get In Touch Welcome to the future of insulation. GWR NANO INSULATION® GWR NANO INSULATION® GWR Nano is a paint-like liquid insulating material with special properties. A unique, revolutionary solution in the construction … Home Read More »",
  metadataBase: new URL("http://gwr-nano.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home - GWR Nano Insulation",
    description:
      "GWR NANO INSULATION® Born to change insulation Our goal is to provide quality, efficient energy-saving for a sustainable future.    Request information Get In Touch Welcome to the future of insulation. GWR NANO INSULATION® GWR NANO INSULATION® GWR Nano is a paint-like liquid insulating material with special properties. A unique, revolutionary solution in the construction … Home Read More »",
    url: "http://gwr-nano.com/",
    siteName: "GWR Nano Insulation",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "http://gwr-nano.com/wp-content/uploads/2023/10/20190716_211910-768x1024.jpg",
        width: 768,
        height: 1024,
        alt: "GWR Nano Insulation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - GWR Nano Insulation",
    description:
      "GWR NANO INSULATION® Born to change insulation Our goal is to provide quality, efficient energy-saving for a sustainable future.    Request information Get In Touch Welcome to the future of insulation. GWR NANO INSULATION® GWR NANO INSULATION® GWR Nano is a paint-like liquid insulating material with special properties. A unique, revolutionary solution in the construction … Home Read More »",
    images: [
      {
        url: "http://gwr-nano.com/wp-content/uploads/2023/10/20190716_211910-768x1024.jpg",
        width: 768,
        height: 1024,
        alt: "GWR Nano Insulation",
      },
    ],
    creator: "@gwrnano",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AppProvider>
          <Header mode="white" />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
