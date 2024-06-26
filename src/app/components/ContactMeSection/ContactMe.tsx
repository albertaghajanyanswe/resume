"use client";
import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DEFAULT_VALUES_CONTACT_ME } from "@/app/shared/defaultValues";
import StepHOC from "@/app/shared/form/FormHOC";
import { iContactMe } from "@/app/shared/types";
import { isEmail, requiredErrMsg } from "@/app/helpers/formHelper";
import CustomButton from "@/app/shared/customButton/CustomButton";
import styles from "./ContactMe.module.css";
import { useSnackbar } from "notistack";
import SystemMessage from "../systemMessage";

const FormHOC = StepHOC<iContactMe>()([
  "name",
  "phone",
  "email",
  "subject",
  "message",
]);

const Form = FormHOC.Form;

export default function ContactMe() {
  const methods = useForm({
    defaultValues: DEFAULT_VALUES_CONTACT_ME,
    mode: "onChange",
  });

  const { handleSubmit } = methods;

  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();

  const contactUs = useCallback(
    () =>
      handleSubmit(async (data) => {
        try {
          setLoading(true);
          const res = await fetch("/api/contact-us-grid", {
            method: "POST",
            body: JSON.stringify({
              name: data.name,
              phone: data.phone,
              senderEmail: data.email,
              subject: data.subject,
              text: data.message,
            }),
          });
          console.log('res = ', res)
          if (res?.status == 200) {
            SystemMessage(enqueueSnackbar, "Your message was sent successfully.", { variant: 'success', theme });
          } else {
            SystemMessage(enqueueSnackbar, "Your message was not sent.", { variant: 'error', theme });
          }

        } catch (error: any) {
          SystemMessage(enqueueSnackbar, "Your message was not sent.", { variant: 'error', theme });
        } finally {
          setLoading(false);
        }
        return true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }),
    []
  );

  const { t } = useTranslation();
  const validateEmail = (value: string) =>
    isEmail(value) ? true : t("errors.incorrectEmail");

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={styles.root}>
      <Typography
        sx={{
          mb: 4,
          fontSize: { xs: "36px", md: "48px", lg: "64px" },
          fontFamily: "Poppins",
          fontWeight: 600,
          textAlign: "center",
          color: "var(--main-color)",
        }}
      >
        Contact Me
      </Typography>
      <FormProvider {...methods}>
        <form noValidate>
          <Form.TextField
            rules={{ required: requiredErrMsg(t, t("contactMe.name")) }}
            name="name"
            placeholder={t("contactMe.name")}
            label={t("contactMe.name")}
            sxContainer={{ mt: 0 }}
            borderRadius={8}
            size={isMobile ? "small" : "medium"}
          />
          <Form.TextField
            rules={{ required: requiredErrMsg(t, t("contactMe.phone")) }}
            name="phone"
            placeholder={t("contactMe.phone")}
            label={t("contactMe.phone")}
            sxContainer={{ mt: 3 }}
            borderRadius={8}
            size={isMobile ? "small" : "medium"}
          />
          <Form.TextField
            rules={{
              required: requiredErrMsg(t, t("contactMe.email")),
              validate: validateEmail,
            }}
            name="email"
            placeholder={t("contactMe.email")}
            label={t("contactMe.email")}
            sxContainer={{ mt: 3 }}
            borderRadius={8}
            size={isMobile ? "small" : "medium"}
          />
          <Form.TextField
            rules={{ required: requiredErrMsg(t, t("contactMe.subject")) }}
            name="subject"
            placeholder={t("contactMe.subject")}
            label={t("contactMe.subject")}
            sxContainer={{ mt: 3 }}
            borderRadius={8}
            size={isMobile ? "small" : "medium"}
          />
          <Form.TextField
            rules={{ required: requiredErrMsg(t, t("contactMe.message")) }}
            name="message"
            placeholder={t("contactMe.message")}
            label={t("contactMe.message")}
            sxContainer={{ mt: 3 }}
            borderRadius={8}
            multiline
            rows={isMobile ? 4 : 6}
          />
          <Box sx={{ mt: 4 }}>
            <CustomButton
              type="primary"
              title={t("actions.sendMsg")}
              onClick={contactUs()}
              sx={{ width: "100%!important" }}
              disabled={loading}
            />
          </Box>
        </form>
      </FormProvider>
      <span
        className={styles.animate}
        style={{ "--i": "1" } as React.CSSProperties}
      ></span>
    </div>
  );
}
