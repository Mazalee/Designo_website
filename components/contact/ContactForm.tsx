"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styles from "./ContactForm.module.css";

type IFormInput = {
  name: string;
  email: string;
  phone: number;
  company: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<IFormInput>();
  const { errors } = formState;
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    toast.success("Form submitted successfully!");
    reset();
  };

  return (
    <section className={styles.contact_section}>
      <div className={styles.contact_form_holder}>
        <div className={styles.two_circle}>
          <svg width="584" height="292" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#a)" fillRule="evenodd" opacity=".06">
              <circle
                transform="matrix(1 0 0 -1 0 292)"
                cx="146"
                cy="146"
                r="146"
              />
              <circle
                transform="matrix(0 1 1 0 292 -292)"
                cx="438"
                cy="146"
                r="146"
              />
            </g>
          </svg>
        </div>

        <form
          className={styles.contact_form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.form_header}>
            <h2>contact us</h2>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>

          <div className={styles.form_section}>
            <div className={styles.form_children}>
              <label htmlFor="name"></label>

              <input
                className={`${styles.inputField} ${
                  errors.name ? styles.errorPlaceholder : ""
                }`}
                placeholder="Name"
                {...register("name", {
                  required: "this field cannot be empty",
                })}
              />
              <div
                className={styles.underline_contact}
                style={{ backgroundColor: errors.name ? "#FF0000" : "" }}
              ></div>
              <span>{errors.name?.message}</span>
            </div>

            <div className={styles.form_children}>
              <label htmlFor="email"></label>

              <input
                className={`${styles.inputField} ${
                  errors.email ? styles.errorPlaceholder : ""
                }`}
                placeholder="Email Address"
                {...register("email", {
                  required: "this field cannot be empty",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              <div
                className={styles.underline_contact}
                style={{ backgroundColor: errors.email ? "#FF0000" : "" }}
              ></div>
              <span>{errors.email?.message}</span>
            </div>

            <div className={styles.form_children}>
              <label htmlFor="number"></label>

              <input
                className={`${styles.inputField} ${
                  errors.phone ? styles.errorPlaceholder : ""
                }`}
                placeholder="Phone"
                {...register("phone", {
                  required: "this field cannot be empty",
                  pattern: {
                    value:
                      /^[+]?[0-9]{1,4}?[-.\s]?(\([0-9]{1,3}\)|[0-9]{1,4})[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              <div
                className={styles.underline_contact}
                style={{ backgroundColor: errors.phone ? "#FF0000" : "" }}
              ></div>
              <span>{errors.phone?.message}</span>
            </div>

            <div className={styles.form_children}>
              <label htmlFor="message"></label>

              <textarea
                className={`${styles.inputField} ${
                  errors.message ? styles.errorPlaceholder : ""
                }`}
                placeholder="Your Message"
                {...register("message", {
                  required: "this field cannot be empty",
                })}
                rows={4}
                cols={50}
              ></textarea>
              <div
                className={styles.underline_contact}
                style={{ backgroundColor: errors.message ? "#FF0000" : "" }}
              ></div>
              <span>{errors.message?.message}</span>
            </div>

            <button className={`${styles.btn_small} ${styles.btn_contact}`}>
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
