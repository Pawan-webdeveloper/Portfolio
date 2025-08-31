import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import emailjs from '@emailjs/browser';

// function FloatingPaths({ position }: { position: number }) {
//     const paths = Array.from({ length: 36 }, (_, i) => ({
//         id: i,
//         d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
//             380 - i * 5 * position
//         } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
//             152 - i * 5 * position
//         } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
//             684 - i * 5 * position
//         } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
//         color: `rgba(15,23,42,${0.1 + i * 0.03})`,
//         width: 0.5 + i * 0.03,
//     }));

//     return (
//         <div className="absolute inset-0 pointer-events-none">
//             <svg
//                 className="w-full h-full text-slate-950 dark:text-white"
//                 viewBox="0 0 696 316"
//                 fill="none"
//             >
//                 <title>Background Paths</title>
//                 {paths.map((path) => (
//                     <motion.path
//                         key={path.id}
//                         d={path.d}
//                         stroke="currentColor"
//                         strokeWidth={path.width}
//                         strokeOpacity={0.1 + path.id * 0.03}
//                         initial={{ pathLength: 0.3, opacity: 0.6 }}
//                         animate={{
//                             pathLength: 1,
//                             opacity: [0.3, 0.6, 0.3],
//                             pathOffset: [0, 1, 0],
//                         }}
//                         transition={{
//                             duration: 20 + Math.random() * 10,
//                             repeat: Number.POSITIVE_INFINITY,
//                             ease: "linear",
//                         }}
//                     />
//                 ))}
//             </svg>
//         </div>
//     );
// }

export function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Send notification email to admin
            await emailjs.send(
                'service_zs1ksmt',
                'template_ld3d2pw',
                {
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    from_email: formData.email,
                    message: formData.message,
                },
                'avnm7qhLyStSbLSrR'
            );

            // Send thank you email to user
            await emailjs.send(
                'service_zs1ksmt',
                'template_shat53w', // Create a new template for thank you emails
                {
                    to_name: `${formData.firstName} ${formData.lastName}`,
                    to_email: formData.email,
                    message: `Thank you for reaching out! I've received your message and will get back to you soon.

Your message:
${formData.message}

Best regards,
Pawan Sah`
                },
                'avnm7qhLyStSbLSrR'
            );

            setSubmitStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const words = "Contact Me".split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <div className="absolute inset-0"></div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-2xl mx-auto"
                >
                    {/* Animated Title */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
            bg-gradient-to-r from-neutral-900 to-neutral-700/80 
            dark:from-white dark:to-white/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 text-left">
                                    First Name
                                </label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/20 dark:bg-black/30 border-white/30 dark:border-white/20 text-neutral-900 dark:text-white placeholder-neutral-700 dark:placeholder-slate-300 focus:border-neutral-900 dark:focus:border-white focus:ring-neutral-900 dark:focus:ring-white"
                                    placeholder="First name"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 text-left">
                                    Last Name
                                </label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/20 dark:bg-black/30 border-white/30 dark:border-white/20 text-neutral-900 dark:text-white placeholder-neutral-700 dark:placeholder-slate-300 focus:border-neutral-900 dark:focus:border-white focus:ring-neutral-900 dark:focus:ring-white"
                                    placeholder="Last name"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 text-left">
                                Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-white/20 dark:bg-black/30 border-white/30 dark:border-white/20 text-neutral-900 dark:text-white placeholder-neutral-700 dark:placeholder-slate-300 focus:border-neutral-900 dark:focus:border-white focus:ring-neutral-900 dark:focus:ring-white"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 text-left">
                                Your Message
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full bg-white/20 dark:bg-black/30 border-white/30 dark:border-white/20 text-neutral-900 dark:text-white placeholder-neutral-700 dark:placeholder-slate-300 focus:border-neutral-900 dark:focus:border-white focus:ring-neutral-900 dark:focus:ring-white resize-none"
                                placeholder="Tell me about your project or how I can help you..."
                            />
                        </div>
                        <div>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-black text-neutral-100 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 
                        font-geist tracking-tighter text-lg px-8 py-3 rounded-full transition-all duration-300 
                        shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    'Send Message'
                                )}
                            </Button>
                        </div>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-700 dark:text-green-400">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-700 dark:text-red-400">
                                Failed to send message. Please try again later.
                            </div>
                        )}
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
//     );
// }
//                                 />
//                             </motion.div>
//                         </div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.8 }}
//                             className="mb-6"
//                         >
//                             <label htmlFor="email" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 text-left">
//                                 Email
//                             </label>
//                             <Input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 required
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 className="w-full bg-white/20 dark:bg-black/30 border-white/30 dark:border-white/20 text-neutral-900 dark:text-white placeholder-neutral-700 dark:placeholder-slate-300 focus:border-neutral-900 dark:focus:border-white focus:ring-neutral-900 dark:focus:ring-white"
//                                 placeholder="Enter your email address"
//                             />
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.9 }}
//                             className="mb-8"
//                         >
//                             <label htmlFor="message" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 text-left">
//                                 Your Message
//                             </label>
//                             <Textarea
//                                 id="message"
//                                 name="message"
//                                 required
//                                 rows={5}
//                                 value={formData.message}
//                                 onChange={handleInputChange}
//                                 className="w-full bg-white/20 dark:bg-black/30 border-white/30 dark:border-white/20 text-neutral-900 dark:text-white placeholder-neutral-700 dark:placeholder-slate-300 focus:border-neutral-900 dark:focus:border-white focus:ring-neutral-900 dark:focus:ring-white resize-none"
//                                 placeholder="Tell me about your project or how I can help you..."
//                             />
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 1.0 }}
//                         >
//                             <Button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className="bg-black text-neutral-100 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 
//             font-geist tracking-tighter text-lg px-8 py-3 rounded-full transition-all duration-300 
//             shadow-lg hover:shadow-xl transform hover:scale-105"
//                             >
//                                 {isSubmitting ? (
//                                     <div className="flex items-center justify-center">
//                                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                                         Sending...
//                                     </div>
//                                 ) : (
//                                     'Send Message'
//                                 )}
//                             </Button>
//                         </motion.div>

//                         {/* Status Messages */}
//                         {submitStatus === 'success' && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-700 dark:text-green-400"
//                             >
//                                 Message sent successfully! I'll get back to you soon.
//                             </motion.div>
//                         )}

//                         {submitStatus === 'error' && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-700 dark:text-red-400"
//                             >
//                                 Something went wrong. Please try again.
//                             </motion.div>
//                         )}
//                     </motion.form>
//                 </motion.div>
//             </div>
//         </div>
//     );
// }
//                                 Message sent successfully! I'll get back to you soon.
//                             </motion.div>
//                         )}

//                         {submitStatus === 'error' && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-700 dark:text-red-400"
//                             >
//                                 Something went wrong. Please try again.
//                             </motion.div>
//                         )}
//                     </motion.form>
//                 </motion.div>
//             </div>
//         </div>
//     );
// }
//     );
// }
