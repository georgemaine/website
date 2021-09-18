import NextHead from "next/head";

export default function Head({
  title = `Georgemaine Lourens — indoor gardener and product designer at Pitch`,
  description = "Product designer with a passion for taking on complex problems and designing elegant, simple solutions that surprise and delight users. My goal is to create experiences that influence the industry, aswell as people’s lives. By constantly focusing on the consumer, I create products that are not only amazing to look at, but also intuitive and useful to people worldwide.",
  image = "https://georgemaine.com/og-image.jpg",
}) {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel='icon' href='favicon.svg' />
      <link rel='mask-icon' href='mask-icon.svg' color='var(--black)' />
      <link rel='apple-touch-icon' href='apple-touch-icon.png' />
      <meta name='title' content={title} />
      <meta name='author' content='Georgemaine Lourens' />
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='product design,product designer,ux,ui,user experience,user interface,interaction design,interaction designer,user experience designer,motion designer'
      />
      <meta itemProp='name' content='Georgemaine Lourens' />
      <meta itemProp='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:description' content={description} />
      <meta property='og:url' content='https://georgemaine.com' />
      <meta property='og:image' content={image} />
      <meta property='og:image:secure_url' content={image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:site_name' content='Georgemaine Lourens' />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:image' content={image} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:creator' content='Georgemaine Lourens' />
      <meta property='twitter:image:src' content={image} />
    </NextHead>
  );
}
