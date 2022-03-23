import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Contact.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import "../Button/Button.module.css";
const Contact = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [templateParams, setTemplateParams] = useState({
    from_name: "",
    message: "",
  });
  const onInputChange = (e) => {
    setTemplateParams({ ...templateParams, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_56o3ooo', //
        'template_jwhc4fe', //
        templateParams,
        'jvzG9oKouwnyNiLzz' //
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
    swal({
      title: "Sent Successfully!",
      text: "Glad to hear from you! I will get back to you as soon possible",
      icon: "success",
    });
    setTemplateParams({
      from_name: "",
      message: "",
    });
  };
  return (
    <footer
      className={styles.footer}
      id="contact"
      // style={{ background: `${newTheme.highlightBackground}` }}
    >
      <div className={styles.container}>
        <h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
        <p style={{ color: `${newTheme.para}` }} className={styles.paragraph}>
          I'm actively looking for any new opportunities, in full-stack web
          development.
        </p>
        <div
          style={{ color: `${newTheme.title}` }}
          className={styles.contactOptions}
        >
          <a
            href="tel:8788921998"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fas fa-phone-alt" />
          </a>
          <a
            href="mailto:dhananjaydhoke3@gmail.com"
            aria-label="email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope"></i>
          </a>
          {/* <a
            href="https://twitter.com/DhananjayDhoke"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a> */}
          <a
            href="https://github.com/DhananjayDhoke"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/dhananjaydhoke/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      {/* <div style={{ background: `${newTheme.line}` }} className={styles.line} /> */}
      <div style={{ color: `${newTheme.para}` }} className={styles.copyright}>
        <Container>
          <div>
            <h3>
              Dhananjay Dhoke <br /> At.Bhilewada, Post-Bhondewada,
              Tal-Ramtek, Dist-Nagpur, Maharashtra India, 441106
              <br /> 8788921998
              <br />
              dhananjaydhoke3@gmail.com
            </h3>
            <h4>
              Drop a suggestion, feedback, opportunities or we can colaborate on
              a project. Please mention your contact details if you are
              expecting a reply.
            </h4>
            <div>
              <Form onSubmit={(e) => onSubmit(e)}>
                <Form.Group>
                  <Form.Control
                    className={styles.formsubi}
                    onChange={(e) => onInputChange(e)}
                    value={templateParams.from_name}
                    name="from_name"
                    type="name"
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Control
                    onChange={(e) => onInputChange(e)}
                    value={templateParams.message}
                    name="message"
                    as="textarea"
                    rows={8}
                    className={styles.formmsg}
                    placeholder="Enter your message"
                  />
                </Form.Group>
                <Button className={styles.buttonComponent} type="submit">
                  <span>Submit</span>
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Contact;
