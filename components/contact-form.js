import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import InstagramIcon from "./icons/facebook-icon";
import TwitterIcon from "./icons/twitter-icon";
import MailIcon from "./icons/mail-icon";
import WhatsappIcon from "./icons/whatsapp-icon";

function ContactForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: "/api/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status == 200) {
        window.alert("Thanks for contacting us");
        reset();
        router.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="grid grid-cols-1 lg:grid-cols-2 w-full rounded-3xl overflow-hidden shadow"
    >
      <div className="w-full bg-gradient-to-tr from-orange-300 via-orange-500 to-orange-700 p-12 space-y-4 flex flex-col justify-center">
        <h1 className="text-gray-100 text-2xl">Send Us A Message</h1>
        <div className="w-full">
          <input
            name="name"
            type="text"
            placeholder="Name"
            {...register("name", {
              required: {
                value: true,
                message: "You must enter your name",
              },
            })}
            className={`bg-transparent font-light border-b border-white px-2 w-full focus:outline-none text-gray-100 placeholder-current ${
              errors.name ? "border-red-500" : null
            }`}
          />
          <div className="text-red-500 font-medium">
            {errors?.name?.message}
          </div>
        </div>

        <div>
          <input
            name="business"
            type="text"
            placeholder="Business Name (optional)"
            {...register("business")}
            className="bg-transparent font-light border-b border-white px-2 w-full focus:outline-none text-gray-100 placeholder-current"
          />
        </div>

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "You must enter an email address",
              },
              minLength: {
                value: 7,
                message: "This is too short",
              },
              maxLength: {
                value: 120,
                message: "This is too long",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "This needs to be a valid email address",
              },
            })}
            className={`bg-transparent font-light border-b border-white px-2 w-full focus:outline-none text-gray-100 placeholder-current ${
              errors.name ? "border-red-500" : null
            }`}
          />
          <div className="text-red-500 font-medium">
            {errors?.email?.message}
          </div>
        </div>
        <div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            {...register("subject", {
              required: {
                value: true,
                message: "You must enter a subject",
              },
              maxLength: {
                value: 120,
                message: "This is too long",
              },
            })}
            className={`bg-transparent font-light border-b border-white px-2 w-full focus:outline-none text-gray-100 placeholder-current ${
              errors.name ? "border-red-500" : null
            }`}
          />
          <div className="text-red-500 font-medium">
            {errors?.subject?.message}
          </div>
        </div>

        <div>
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            {...register("message", {
              required: {
                value: true,
                message: "Please state your message",
              },
              minLength: {
                value: 20,
                message: "This is too short",
              },

              maxLength: {
                value: 1000,
                message: "Your message can't be more than 1000 characters",
              },
            })}
            className={`bg-transparent font-light border-b border-white px-2 w-full focus:outline-none text-gray-100 placeholder-current ${
              errors.name ? "border-red-500" : null
            }`}
          ></textarea>
          <div className="text-red-500 font-medium">
            {errors?.message?.message}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="text-gray-900 w-full text-lg px-4 py-2 rounded-full bg-orange-100 focus:outline-none transition ease-in-out hover:bg-orange-200 duration-150"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="w-full p-12 space-y-4 bg-white dark:bg-black dark:text-orange-50 relative">
        <h1 className="font-bold text-orange-500 text-2xl">Contact Us</h1>
        <div className="space-y-4">
          <p>
            If you need to get in contact with us. Send us a message, leave your
            email and one of our Support Team members will reach out to you. If
            you:
          </p>
          <ul className="list-disc pl-5">
            <li>Need help using our apps</li>
            <li>Have a suggestion</li>
            <li>Require App Development or Website Development services</li>
            <li>Recently changed your business address</li>
            <li>Would like to join our Phonebook</li>
          </ul>
        </div>
        <div>
          <p>Our Support Team is available from</p>
          <p className="font-medium">10 AM – 5 PM Mon – Fri</p>
          <p className="font-medium">11 AM – 3 PM on Saturdays</p>
        </div>
        <div className="w-full flex justify-center gap-4 pt-5 bottom-4 mx-auto">
          <Link href="https://wa.me/13045641223">
            <a
              target="_blank"
              className="border-2 border-orange-600 rounded-full py-2 px-4 "
            >
              <WhatsappIcon />
            </a>
          </Link>

          <Link href="https://www.twitter.com/_quickapps">
            <a
              target="_blank"
              className="border-2 border-orange-600 rounded-full py-2 px-3 "
            >
              <TwitterIcon />
            </a>
          </Link>

          <Link href="https://instagram.com/_quickapps">
            <a
              target="_blank"
              className="border-2 border-orange-600 rounded-full py-2 px-3 "
            >
              <InstagramIcon />
            </a>
          </Link>

          <Link href="mailto:support@quickservicesapps.com">
            <a
              target="_blank"
              className="border-2 border-orange-600 rounded-full py-2 px-3 "
            >
              <MailIcon />
            </a>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
