// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/providers/appProvider";
import Header from "@/views/share/header";
import Footer from "@/views/share/footer";

export const metadata: Metadata = {
  title: "Contact Us - GWR Nano Insulation",
  icons: "/logo.png",
  description:
    "Contact Us Get in touch with Us. Feel free to contact us with any questions you have. Contact Us for more information Contact Info Email info@gwr-nano.com Call Us +36 30 908 2216+36 70 319 5835 Location H-1037 Budapest, Csillaghegyi út 23. Follow Us Facebook-f Instagram Youtube",
  metadataBase: new URL("http://gwr-nano.com"),
  alternates: {
    canonical: "/contact-us/",
  },
  openGraph: {
    title: "Contact Us - GWR Nano Insulation",
    description:
      "Contact Us Get in touch with Us. Feel free to contact us with any questions you have...",
    url: "http://gwr-nano.com/contact-us/",
    siteName: "GWR Nano Insulation",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "http://gwr-nano.com/wp-content/uploads/2023/10/innovationaward-210x300.jpg",
        width: 210,
        height: 300,
        alt: "Innovation Award",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - GWR Nano Insulation",
    description:
      "Contact Us Get in touch with Us. Feel free to contact us with any questions you have...",
    images: [
      "http://gwr-nano.com/wp-content/uploads/2023/10/innovationaward-210x300.jpg",
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
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
