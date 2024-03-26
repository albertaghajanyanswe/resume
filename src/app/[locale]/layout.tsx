import { Poppins } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import CustomNavBar from "../components/navbar/CustomNavBar";
import CustomThemeProvider from "../shared/themes/CustomThemeProvider";
import initTranslations from "../i18n";
import TranslationProvider from "../providers/TranslationProvider";
import { Metadata } from "next";
import { CustomSnackbarProvider } from "../providers/CustomSnackbarProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const i18nNamespaces = ["translation"];

export const metadata: Metadata = {
  title: "Albert Aghajanyan Resume",
  description: "Experience",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <CustomSnackbarProvider>
          <TranslationProvider
            locale={locale}
            resources={resources}
            namespaces={i18nNamespaces}
          >
            <CustomThemeProvider>
              <CustomNavBar />
              <div className={styles.children_content}>{children}</div>
            </CustomThemeProvider>
          </TranslationProvider>
        </CustomSnackbarProvider>
      </body>
    </html>
  );
}
