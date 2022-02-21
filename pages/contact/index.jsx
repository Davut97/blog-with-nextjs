import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { submitEmail } from "../api/emails";
import { useRouter } from "next/router";
import Head from "next/head";

const index = () => {
  const router = useRouter();

  const form = useRef();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    if (fname && lname && emailAddress && phoneNumber && message) {
      let result = await submitEmail(form);
      if (result.status == 200) {
        router.reload(window.location.pathname);
        alert("Yakında iletişime geçeceğiz");
      } else {
        alert("Error!");
      }
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <form ref={form} onSubmit={submit}>
      <Head>
        <title>pisirenadam</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='contact-1 py-4 md:py-12  container mx-auto px-10 mb-8 rounded'>
        <div className='container mx-auto px-10 mb-8 '>
          <div className='xl:flex '>
            <div className='xl:w-10/12 xl:mx-auto px-4'>
              <div className='xl:w-3/4 mb-4'>
                <p className='text-xl mb-2'>
                  Talep ve Önerileriniz İçin Aşağıdaki Mesaj Kutusunu Doldurunuz.
                </p>
              </div>

              <div className='md:flex md:-mx-4 mt-4 md:mt-10 bg-[#E5A73E] pt-10 pb-10 rounded'>
                <div className='md:w-2/3 md:px-4 rounded'>
                  <div className='contact-form'>
                    <div className='sm:flex sm:flex-wrap -mx-3'>
                      <div className='sm:w-1/2 px-3 mb-6'>
                        <input
                          onChange={(e) => setFname(e.target.value)}
                          name='fname'
                          type='text'
                          placeholder='İsim'
                          className='border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input'
                        />
                      </div>
                      <div className='sm:w-1/2 px-3 mb-6'>
                        <input
                          onChange={(e) => setLname(e.target.value)}
                          name='lname'
                          type='text'
                          placeholder='Soyisim'
                          className='border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input'
                        />
                      </div>
                      <div className='sm:w-1/2 px-3 mb-6'>
                        <input
                          onChange={(e) => setEmailAddress(e.target.value)}
                          name='emailAdd'
                          type='text'
                          placeholder='E-mail'
                          className='border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input'
                        />
                      </div>
                      <div className='sm:w-1/2 px-3 mb-6'>
                        <input
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          name='phoneNumber'
                          type='text'
                          placeholder='Telefon numarası'
                          className='border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input'
                        />
                      </div>
                      <div className='sm:w-full px-3'>
                        <textarea
                          onChange={(e) => setMessage(e.target.value)}
                          name='theMessage'
                          id='message'
                          cols='30'
                          rows='4'
                          placeholder='Mesaj'
                          className='border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input'
                        ></textarea>
                      </div>
                    </div>
                    <div className='text-right mt-4 md:mt-12'>
                      <button
                        type='submit'
                        className='border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300'
                      >
                        mesaj gönder
                        <i className='fas fa-chevron-right ml-2 text-sm'></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className='md:w-1/3 md:px-4 mt-10 md:mt-0'>
                  <div className='bg-indigo-100 rounded py-4 px-6'>
                    <h5 className='text-xl font-medium mb-3'>İnfo </h5>
                    <p className='text-gray-700 mb-4'>
                      Randevu ve İş Birlikleri İçin Aşağıdaki Mail Adresinden Bize Ulaşabilirsiniz.
                      <a
                        href='mailto:pisirenadamla@gmail.com'
                        className='text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block'
                      >
                        pisirenadamla@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default index;
