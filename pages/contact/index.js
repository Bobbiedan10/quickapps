import Head from "next/head";
import ContactForm from "../../components/contact-form";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us - QuickApps</title>
      </Head>
      <div className='lg:h-screen pt-20 flex flex-col items-center justify-center md:max-w-2xl lg:max-w-4xl mx-auto px-4 pb-4'>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
