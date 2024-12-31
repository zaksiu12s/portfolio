import { useTranslation } from "react-i18next";
import SectionHeaderText from "../UI/SectionHeaderText";
import emailjs from 'emailjs-com';
import { ChangeEvent, FormEvent, useState } from "react";
import i18n from "../../18n";

export default function ContactSection() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [status, setStatus] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setStatusMessage("");
        setStatus(false);
    };

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMessage('');

        const form = e.target as HTMLFormElement;

        emailjs
            .sendForm(
                'service_goac1ku',
                'template_to474c2',
                form,
                'pnDfZKa8XPJpywhH8'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatusMessage('Message has been sent! Thank you for contacting me.');
                    setStatus(true);
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    console.log(error.text);
                    setStatusMessage('An error occurred. Please try again.');
                    setStatus(false);
                }
            )
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (<section id="section5" className="px-12 pt-32 pb-20 overflow-x-hidden">
        <div className="max-w-[900px] mx-auto pb-10">
            <SectionHeaderText
                mainText={t("Contact")}
                secondaryText={t("I can make these for you:")}
            />
            <form onSubmit={sendEmail} className="p-8 sm:pl-20 max-w-[900px]">
                <input title="User language (auto)" readOnly className="hidden" name="userLang" value={i18n.language} />

                <div className="mb-4">
                    <label htmlFor="name" className="block text-neutral-700 dark:text-neutral-400 font-Poppins text-xl font-bold">{t("Name")}</label>
                    <input type="text" id="name" value={formData.name} required
                        onChange={handleChange} name="name" className="w-full text-neutral-200 p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 bg-neutral-800" placeholder={t("Enter your name")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-neutral-700 dark:text-neutral-400 font-Poppins text-xl font-bold">E-mail</label>
                    <input type="email" value={formData.email} required
                        onChange={handleChange}
                        id="email" name="email" className="w-full text-neutral-200 p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 bg-neutral-800" placeholder={t("Enter your e-mail")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-neutral-700 dark:text-neutral-400 font-Poppins text-xl font-bold">{t("Message")}</label>
                    <textarea value={formData.message} required
                        onChange={handleChange} id="message" name="message" className="min-h-20 max-h-96 w-full text-neutral-200 p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 bg-neutral-800" placeholder={t("Enter your message")}></textarea>
                </div>

                <div className="text-center">
                    <button type="submit" className="w-full flex justify-center items-center py-3 h-12 mt-4 bg-orange-600 font-bold text-white rounded-sm hover:rounded-lg transition-all focus:outline-none focus:ring-4 focus:ring-orange-700">
                        {isLoading ? <>
                            <div className="z-50">
                                <div className="relative px-3 py-2 border-8 bg-orange-600 w-10 h-10 rounded-full bg-transparent">
                                    <div>
                                        <div className="absolute bg-orange-600 w-2 h-10 left-2 -top-2 animate-spinBorder"></div>
                                        <div className="absolute bg-white w-3 h-3 left-[6px] top-[6px] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </> : t("Send message")}
                    </button>
                    <p className={" pt-1.5 " + ((status == true) ? " text-orange-700 " : " text-red-500 ")}>{t(statusMessage)}</p>
                </div>
            </form>
        </div>
    </section>);
}