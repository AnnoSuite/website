import React, { useState } from "react";
import { Box, InputGroup, Label, Input, Button, P } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@apollo/react-hooks";
import { Formik, Form as FkForm, Field } from "formik";
import * as Yup from "yup";
import { useForm } from "@statickit/react";

import { subscribe as SUBSCRIBE } from "../graphql/mutations/waitlist/index.gql";

library.add(faCheck);

const WaitlistSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

const Form = ({ tagline = "Sign up to be notified when we launch." }) => {
  const [subscribeHandler, { data }] = useMutation(SUBSCRIBE);
  const [state, submit] = useForm({
    site: "b38c9dcf690d",
    form: "newsletter"
  });

  const submitHandler = async e => {
    subscribeHandler({
      variables: {
        name: "Launch Page 2",
        email: e.target.email.value,
        device: ""
      }
    });
    e.preventDefault();
    return false;
  };

  return (
    <Formik
      initialValues={{
        email: ""
      }}
      validationSchema={WaitlistSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <FkForm onSubmit={submitHandler}>
          <noscript>
            <Box className="info">
              <P bold>
                This page requires javascript.
                <br />
                <span style={{ fontWeight: "normal" }}>
                  The form will not be submitted unless javascript is activated
                </span>
              </P>
            </Box>
          </noscript>
          <P style={{ marginLeft: 0 }} bold>
            {tagline}
          </P>
          {(state.succeeded ||
            (data && data.subscribe && data.subscribe.success)) && (
            <Box className="success">
              <P bold>
                <FontAwesomeIcon
                  icon={["fa", "check"]}
                  size="1x"
                  style={{
                    marginRight: "1em"
                  }}
                />
                Thank you for signing up!
              </P>
            </Box>
          )}
          <InputGroup>
            <Label htmlFor="email" className="hidden">
              Email Address
            </Label>
            <Input
              style={{ width: "100%" }}
              id="email"
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />
            <Button type="submit">Notify me</Button>
          </InputGroup>
        </FkForm>
      )}
    </Formik>
  );
};

export default Form;
