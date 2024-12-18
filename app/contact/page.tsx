import Places from "@/components/company/Places";
import ContactForm from "@/components/contact/ContactForm";
import NewFooter from "@/components/contact/NewFooter";
import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactForm />
      <Places />
      <NewFooter />
    </div>
  );
};

export default ContactPage;
