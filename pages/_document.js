import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <script data-ad-client="YOUR_ADSENSE_AD_UNIT_ID" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Inserted Text */}
          <div style={{ textAlign: "center", margin: "120px auto", padding: "0 120px", whiteSpace: "pre-line" }}>
            <h2>Welcome to Thumbnail Save</h2>
            <p>Unlock the potential of YouTube with Thumbnail Save, your all-in-one solution for accessing and downloading stunning thumbnail preview images.
            Enhance your content creation, marketing campaigns, and personal projects with captivating visuals.</p>
            <h3>Supported Formats</h3>
            <p>Thumbnail Save supports a diverse range of formats, including YouTube's HD, HQ, 1080p, and even 4K options. This flexibility ensures that you can secure the ideal thumbnail for your unique needs.</p>
            <h3>Fast and Free Thumbnail Grabber</h3>
            <p>Experience the power of our lightning-fast and free thumbnail grabber. Whether you're using your computer, smartphone, iPhone, or any other compatible device,
            Thumbnail Save streamlines the process of saving YouTube thumbnails for immediate and future use.</p>
            <h3>Simple Steps to Grab and Download</h3>
            <p>1. Copy the URL of the YouTube video from which you'd like to obtain the thumbnail.</p>
            <p>2. Paste the URL into the provided box and click the 'Submit' button.</p>
            <p>3. The thumbnail preview image will be displayed for your convenience.</p>
            <p>4. To save the thumbnail, simply right-click the image and select 'Save image as...' from the context menu.</p>
            
            {/* Add any additional information or calls to action */}
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
