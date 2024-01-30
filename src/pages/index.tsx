// pages/index.tsx
import Contact from "@/app/sections/contact";
import Hero from "@/app/sections/hero";
import Projects from "@/app/sections/projects";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Work = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the previous path was '/about'
    if (router.asPath === "/" && window.history.state?.as === "/about") {
      document
        .getElementById("contact-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.asPath]);
  return (
    <Layout>
      <Hero />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Work;
