import { motion } from "framer-motion";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import * as yup from "yup";

import { slideIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc/SectionWrapper";
import {
  Form,
  FormControl,
  FormField,
  SubmitButton,
  FormTextArea,
  ErrorMessage,
  FormLabel,
  ContactWrapper,
  EarthWrapper,
} from "./styled";
import { SectionText, SectionHeading } from "../../shared/styled";
import { EarthCanvas } from "../canvas/EarthCanvas";

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/[a-zA-Zа-яА-Я]/, "Першим символом повинна бути літера!")
    .min(3, "Ім'я складається з мінімум трьох символів!")
    .required("Ім'я користувача є обов'язковим!"),
  email: yup
    .string()
    .email("Невірний формат пошти!")
    .required("Електронна пошта обов'язкова!"),
  message: yup.string(),
});

export const Contact = SectionWrapper(() => {
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          {
            from_name: values.name,
            to_name: "Dima Honcharenko",
            from_email: values.email,
            to_email: "d.goncharenko.man@gmail.com",
            message: values.message,
          },
          import.meta.env.VITE_EMAIL_PKEY
        );

        alert("Thank you. I will get back to you as soon as possible.");
        helpers.resetForm();
      } catch (err) {
        console.log(err);
        alert(err);
      }
    },
  });

  return (
    <ContactWrapper>
      <Form
        onSubmit={handleSubmit}
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <motion.div variants={textVariant(0.2)}>
          <SectionText>Get in touch</SectionText>
          <SectionHeading>Contact</SectionHeading>
        </motion.div>
        <FormControl>
          {touched.name && errors.name && (
            <ErrorMessage>{errors.name}</ErrorMessage>
          )}
          <FormLabel htmlFor="name">Your Name</FormLabel>
          <FormField
            value={values.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name.."
          />
        </FormControl>
        <FormControl>
          {touched.email && errors.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
          <FormLabel htmlFor="email">Your Email</FormLabel>
          <FormField
            value={values.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email.."
          />
        </FormControl>
        <FormControl>
          {touched.message && errors.message && (
            <ErrorMessage>{errors.message}</ErrorMessage>
          )}
          <FormLabel htmlFor="message">Your Message</FormLabel>
          <FormTextArea
            rows={10}
            value={values.message}
            onChange={handleChange}
            name="message"
            id="message"
            placeholder="What do you want to say?"
          />
        </FormControl>

        <SubmitButton type="submit">Send</SubmitButton>
      </Form>

      <EarthWrapper
        variants={slideIn("left", "tween", 0.3, 1)}
        style={{ order: 1, flex: 1 }}
      >
        <EarthCanvas />
      </EarthWrapper>
    </ContactWrapper>
  );
}, "contact");
