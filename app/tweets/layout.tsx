import React from 'react';

export const metadata = {
    title: " Favourite Tweets",
    description: "My favourite tweets",
    openGraph: {
        images: "https://ajkulundu.com/api/og?title=My Favourite Tweets",
        url: "https://ajkulundu.com",
    siteName: "AJ Kulundu",
    type: "website",
    description: "AJ Kulundu - Developer & Writer",
    },
    robots:{
        follow: true,
        index: true,
      },
      icons: {
        icon: "/logo.png",
      },
      twitter: {
        card: "summary_large_image",
        site: "@AJKulundu",
        title: "AJ Kulundu - Developer & Writer",
        description: "Fullstack web developer and writer",
        creator: "@AJKulundu",
        images:{ url: "https://ajkulundu.com/api/og?title=My Favourite Tweets", alt: "AJ Kulundu - Developer & Writer" },
      }
}

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <div>{children}</div>
    )
}