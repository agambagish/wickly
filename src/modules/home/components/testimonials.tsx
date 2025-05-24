"use client";

import { motion } from "framer-motion";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "Wickly has completely changed how I engage with cricket. Now I can put my knowledge to the test!",
    author: "Raj Patel",
    role: "Cricket Analyst",
  },
  {
    quote:
      "The real-time trading aspect makes watching matches so much more exciting. Love the platform!",
    author: "Anjali Sharma",
    role: "Sports Enthusiast",
  },
  {
    quote:
      "Clean interface, quick payouts, and great market variety. Wickly is my go-to for cricket trading.",
    author: "Michael Lee",
    role: "Professional Trader",
  },
];

export function Testimonials() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-3xl font-bold">What Our Traders Say</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Join thousands of cricket fans who are already trading on Wickly.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                <motion.div
                  className="text-muted-foreground mb-4 flex-grow text-lg italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  &quot;{testimonial.quote}&quot;
                </motion.div>
                <motion.div
                  className="mt-4 flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Avatar>
                    <AvatarImage
                      src={`https://avatar.vercel.sh/${testimonial.author}`}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>
                      {testimonial.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
