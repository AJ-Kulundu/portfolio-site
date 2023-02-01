export default async function Head() {

  const ogImage = `https://ajkulundu.com/api/og?title=My Favourite Tweets`;
  return (
    <>
      <title>Tweets - AJ Kulundu</title>
      <meta property="og:url" content="https://ajkulundu.com/tweets" />
      <meta
        property="og:image"
        content={ogImage}
      />
      <meta property="og:title" content="AJ Kulundu - Developer & Writer" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AJ Kulundu" />
      <link rel="icon" href="/logo.png" />
      <meta property="og:image:url" content={ogImage}></meta>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AJKulundu" />
      <meta name="twitter:image" content={ogImage} />
    </>
  )
}
