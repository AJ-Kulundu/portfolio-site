import React from 'react';
import {Metadata} from 'next';

export const metadata:Metadata = {
    title: "AJ Kulundu - Favourite Tweets",
    description: "Favourite tweets",
    openGraph: {
        images: "https://ajkulundu.com/api/og?title=Favourite Tweets",
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
        images:{ url: "https://ajkulundu.com/api/og?title=Favourite Tweets", alt: "AJ Kulundu - Favourite Tweets" },
      }
}

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <div>{children}</div>
    )
}