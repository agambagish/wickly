"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-primary/5 px-4 py-20">
      <motion.div
        className="container mx-auto max-w-7xl px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-3xl font-bold">Ready to Trade?</h2>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl">
          Join Wickly today and start trading on your cricket opinions. Sign up
          takes less than a minute.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/sign-in" className={buttonVariants({ size: "lg" })}>
            Get Started Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
