import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import ProductSection from "@/components/ProductSection";
// import ReviewsAndBlog from "@/components/ReviewsAndBlog";
// import Footer from "@/components/Footer";
export const metadata = {
  title:{
    default : "Bambu Lab",
    template : "%s | Bambu Lab"
  } ,
  description: "Make 3D printing easier ",
   openGraph: {
    title: "Bambu Lab",
    description: "Make 3D printing Easier",
    //url: "https://freshmart.com",
    siteName: "Bambu Lab",
    images: [
      {
        url: "/images/Lab1P1S.png",
        width: 800,
        height: 600,
        alt: "Lab P1S",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bambu Lab - 3D Printer",
    description: "Costomize your inovation with 3D printing",
    images: ["/images/Lab1P1S.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    // <>
    // <Navbar/>
    // {children}
    // </>
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

