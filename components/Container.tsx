import React,{FC} from 'react';
import Head from 'next/head';
import Link from 'next/link';

const NavItem = ({href,children}:any) => {
    return(
        <Link href={href} passHref>
        <a className="text-lg font-semibold md:tracking-wide">
            {children}
        </a>
        </Link>
    )
}

const Container:FC = (props) => {
   const {children, ...customMeta} = props;
    const meta = {
        title: "AJ Kulundu - Developer, writer",
        description:"Softare Engineer and Technical writer",
        type:'website',
        ...customMeta
    }

    return(
        <div className="bg-neutral-100 dark:bg-neutral-900">
            <Head>
               <title>{meta.title}</title>
               <meta name="description" content={meta.description} />
               <meta property="og:type" content={meta.type} />
               <meta property="og:site_name" content="AJ Kulundu"/>
               <meta name="twitter:site" content="@AJKulundu" />
               <meta name="robots" content="follow, index" />
            </Head>
            <div className='flex flex-col justify-center px-8'>
            <nav className="flex items-center justify-between mx-auto w-full relative max-w-2xl py-6 bg-neutral-100 dark:bg-neutral-900">
                <div className='flex flex-row items-center gap-x-4'>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/blogs">Blog</NavItem>
                    <NavItem href="/tweets">Tweets</NavItem>
                </div>
                <button className="p-2 bg-neutral-300 rounded-lg">Theme</button>
            </nav>
            <main id="skip"
             className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">
                {children}
            </main>
            </div>
        </div>
    );
}

export default Container;