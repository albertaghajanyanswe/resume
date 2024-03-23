'use client'
import { useState } from "react";
import Image from "next/image";
import { Box, IconButton, Tooltip } from '@mui/material';
import { RiLinkedinLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { LiaTelegram } from "react-icons/lia";

import styles from "./HomeSection.module.css";
import Logo from '@/assets/Albert.Aghajanyan.png';
import CustomButton from "@/app/shared/customButton/CustomButton";

export default function HomeSection() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const contactUs = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/contact-us', {
        method: 'POST',
        body: JSON.stringify({
          senderEmail: 'albert1993aghajanyan@gmail.com',
          subject: 'Hire me',
          text: 'I want to hire you for a Frontend Developer (Remote)',
          description: 'Frontend Developer (Remote)',
        }),
      })
    } catch (err) {
      console.log('err = ', err)
    } finally {
      setLoading(false);
    }
  }

  const downloadCV = () => {
    const pdfPath = "/Albert_Aghajanyan_DOC_CV.pdf";
    const fullUrl = pdfPath;
    const link = document.createElement('a');
    link.href = fullUrl;
    link.download = 'ALBERT_AGHAJANYAN_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyCodeToClipboard = (copyText: string) => {
    navigator.clipboard.writeText(copyText);
  }
  return (
    <main className={styles.main}>
      <div className={`${styles.home} ${styles.show_animate}`} id={styles.home}>
        <div className={styles.home_main}>
          <div className={`${styles.home_content}`}>
            <h1>Hi, I'm <span>Albert Aghajanyan</span>
              <span className={styles.animate} styles="--i:1;"></span>
            </h1>
            <div className={styles.text_animate}>
              <h3>Software Development Engineer </h3>
              <span className={styles.animate} styles="--i:2;"></span>
            </div>
            <p>
              Software Development Engineer with over 7 years of work experience, with more
              oriented in front end development. Over 5 years of experience in Node.JS,
              JavaScript/TypeScript, React.JS. Familiar with Java, Bash, Python, C/C++. Solid
              experience and understanding of functional programming, OOP, and design patterns.
              Designed database schemas with complex entity relationships. Utilized Agile/Scrum
              methodology to manage full life-cycle development of the project. Self-motivated,
              hardworking individual and has ability to work in a team and independently in any
              environment.
            </p>
            <span className={styles.animate} styles="--i:3;"></span>
            <div className={styles.btn_box}>
              <CustomButton disabled title='Hire me' onClick={contactUs} type='primary' />
              <CustomButton disabled title="Let's Talk" onClick={contactUs} type='secondary' />
            </div>
          </div>
          <div className={`${styles.about_img}`}>
            <Image
              className={styles.img}
              src={Logo}
              width={300}
              height={300}
              alt="Author"
              priority={false}
            />
            <span className={styles.circle_spin}></span>
            <span className={styles.animate} styles="--i:5;"></span>
          </div>
        </div>
        <div className={styles.home_sci}>
          <Tooltip title="Copy linked in url">
            <IconButton sx={{ borderRadius: '50%!important', width: 'fit-content!important' }} onClick={() => copyCodeToClipboard('https://www.linkedin.com/in/albert-aghajanyan-1a10ba181/')}><RiLinkedinLine /></IconButton>
          </Tooltip>
          <Tooltip title="Copy telegram username">
            <IconButton sx={{ borderRadius: '50%!important', width: 'fit-content!important' }} onClick={() => copyCodeToClipboard('@albertaghajanyan')}><LiaTelegram /></IconButton>
          </Tooltip>
          <span className={styles.animate} styles="--i:5;"></span>
        </div>
        <Box sx={{ height: '5rem', mt: 4, mb: 4, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <CustomButton
            type='primary'
            title={t('actions.downloadPDF')}
            onClick={downloadCV}
          />
        </Box>
      </div>
    </main>
  );
}
