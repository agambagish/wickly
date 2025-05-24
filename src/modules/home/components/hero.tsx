"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowBigRightIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { formatPrice } from "@/lib/utils";

export function Hero() {
  return (
    <section className="from-background to-muted relative overflow-hidden bg-gradient-to-b px-4 py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <motion.div
            className="space-y-6 md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Trade Your Cricket <span className="text-primary">Opinions</span>,
              Not Just Watch
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              Wickly lets you put your cricket knowledge to the test. Trade on
              match outcomes and player performances in real-time.
            </p>
            <motion.div
              className="flex flex-col gap-4 pt-4 sm:flex-row"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <Link
                  href="/sign-in"
                  className={buttonVariants({ size: "lg" })}
                >
                  Sign Up <ArrowBigRightIcon className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Link
                  href="/dashboard"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Explore Markets
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative hidden md:block md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="from-primary/20 via-primary/10 to-background border-primary/10 aspect-square w-full max-w-lg overflow-hidden rounded-xl border bg-gradient-to-br shadow-xl md:aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/hero-image.png"
                  alt="Hero Image"
                  className="h-full w-full rounded-md object-center opacity-80"
                  fill
                />
                <div className="bg-background/60 absolute inset-0"></div>
                <motion.div
                  className="bg-background/80 border-primary/20 absolute top-1/2 left-1/2 z-10 w-4/5 max-w-xs -translate-x-1/2 -translate-y-1/2 transform rounded-lg border p-6 shadow-lg backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-center">
                    <h3 className="mb-4 text-xl font-semibold">
                      Will India win today?
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="rounded-md bg-emerald-100 p-3 dark:bg-emerald-950/30"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="font-bold text-emerald-600 dark:text-emerald-400">
                          YES
                        </div>
                        <div className="text-sm opacity-70">
                          {formatPrice(65)}
                        </div>
                      </motion.div>
                      <motion.div
                        className="rounded-md bg-rose-100 p-3 dark:bg-rose-950/30"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="font-bold text-rose-600 dark:text-rose-400">
                          NO
                        </div>
                        <div className="text-sm opacity-70">
                          {formatPrice(35)}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
