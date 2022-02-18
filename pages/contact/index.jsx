import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { submitEmail } from "../api/emails";
const index = () => {
  const form = useRef();
  const fullName = useRef("");
  const companyName = useRef("");
  const emailAddress = useRef("");
  const phoneNumber = useRef("");
  const message = useRef("");
  const submit = (e) => {
    e.preventDefault();
    submitEmail(form);
  };
  return (
    <form ref={form} onSubmit={submit}>
      <div className='contact-1 py-4 md:py-12  container mx-auto px-10 mb-8 rounded'>
        <div className='container mx-auto px-10 mb-8 '>
          <div className='xl:flex '>
            <div className='xl:w-10/12 xl:mx-auto px-4'>
              <div className='xl:w-3/4 mb-4'>
                <h1 className='text-3xl text-medium mb-4'>We would love to hear from you</h1>
                <p className='text-xl mb-2'>
                  Please submit your information and we will get back to you.
                </p>
                <p>
                  Call us at
                  <a
                    href='tel:+12314561231'
                    className='text-indigo-600 border-b border-transparent hover:border-indigo-600 transition-colors duration-300'
                  >
                    +1 231 456 1231
                  </a>
                </p>
              </div>

              <div className='md:flex md:-mx-4 mt-4 md:mt-10 bg-[#E5A73E] pt-10 pb-10'>
                <div className='md:w-2/3 md:px-4'>
                  <div className='contact-form'>
                    <div className='sm:flex sm:flex-wrap -mx-3'>
                      <div className='sm:w-1/2 px-3 mb-6'>
                        <input
                          name='fullName'
                          ref={fullName}
                          type='text'
                          placeholder='Full Name'
                          className='border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input'
                        />
                      </div>
                      <div className='sm:w-1/2 px-3 mb-6'>
                        <input
                          name='companyEmail'
                          ref={companyName}
                          type='text'
                          placeholder='Company Name'
                          className='border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input'
                        />
                      </div>
                      <div className='sm:w-1/2 px-3 mb-6'>
                        <input
                          name='emailAdd'
                          ref={emailAddress}
                          type='text'
                          placeholder='E-mail address'
                          className='border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input'
                        />
                      </div>
                      <div class='sm:w-1/2 px-3 mb-6'>
                        <input
                          name='phoneNumber'
                          ref={phoneNumber}
                          type='text'
                          placeholder='Phone Number'
                          className='border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input'
                        />
                      </div>
                      <div className='sm:w-full px-3'>
                        <textarea
                          name='theMessage'
                          ref={message}
                          name='message'
                          id='message'
                          cols='30'
                          rows='4'
                          placeholder='Your message here'
                          className='border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input'
                        ></textarea>
                      </div>
                    </div>
                    <div className='text-right mt-4 md:mt-12'>
                      <button
                        type='submit'
                        className='border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300'
                      >
                        Send a Message
                        <i class='fas fa-chevron-right ml-2 text-sm'></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className='md:w-1/3 md:px-4 mt-10 md:mt-0'>
                  <div className='bg-indigo-100 rounded py-4 px-6'>
                    <h5 className='text-xl font-medium mb-3'>Help</h5>
                    <p className='text-gray-700 mb-4'>
                      Need help or have any query? Don't hesitate, you can directly shoot us an{" "}
                      <a
                        href='mailto:'
                        className='text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block'
                      >
                        email
                      </a>{" "}
                      or call us at{" "}
                      <a
                        href='tel:'
                        className='text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block'
                      >
                        +1 231 456 1231
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
