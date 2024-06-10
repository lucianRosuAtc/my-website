// import ContactForm from "@/components/ContactForm";
import ContactForm from "@/components/ContactForm";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto">
      <div className="grid pt-12 mb-6 xl:mb-14">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-4 text-primary text-lg lg:text-2xl mb-4">
            Get in Touch with Me
          </div>
          <h1 className="my-4">Let&apos;s Work Together</h1>
          <p className="max-w-[600px] xl:max-w-[900px]">
          Dedicated to providing reliable and efficient service to meet all your plumbing needs. Committed to high-quality workmanship and customer satisfaction. Always ready to diagnose and solve your problems, ensuring your home or business runs smoothly.
          </p>
        </div>
      </div>

      <div className="grid mb-14 xl:mb-24">
        <div className="flex flex-col gap-y-4 xl:gap-y-6 xl:text-lg">
          <div className="flex items-center gap-x-8 ">
            <MailIcon size={18} className="text-primary" />
            <a
              href="mailto:email@gmail.com"
              className="hover:text-primary"
            >
              email@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-x-8">
            <HomeIcon size={18} className="text-primary" />
            <div className="">Exeter, UK</div>
          </div>
          <div className="flex items-center gap-x-8">
            <PhoneCall size={18} className="text-primary" />
            <a href="tel:07505xxxxxx" className="hover:text-primary">
              07505700000
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
