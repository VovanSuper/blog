/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-misused-promises */
import type { FirebaseOptions } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import type { ChangeEvent, MutableRefObject, ReactElement, SyntheticEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_PUBLIC_API_KEY,
  authDomain: import.meta.env.REACT_APP_PUBLIC_AUTH_DOMAIN,
  databaseURL: import.meta.env.REACT_APP_PUBLIC_DB_URL,
  projectId: import.meta.env.REACT_APP_PUBLIC_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_PUBLIC_MESSAGE_SENDER_ID,
  appId: import.meta.env.REACT_APP_PUBLIC_APP_ID,
  measurementId: import.meta.env.REACT_APP_PUBLIC_MEASUREMENT_ID,
} as FirebaseOptions;

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const notify = (message: string) => toast(message);

const Contact = (): ReactElement => {
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const emailRef = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const formRef = useRef<HTMLFormElement>() as MutableRefObject<HTMLFormElement>;
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    text: '',
  });
  const { email, fullName, text } = formData;

  useEffect(() => {
    const emailValid = () => emailRef.current.validity.valid;

    function validateInputs() {
      let inputsValid = false;
      if (emailValid() && !!email.length && !!fullName.length && text.length) {
        inputsValid = true;
      }
      return inputsValid;
    }
    const isValid = validateInputs();
    setSubmitEnabled(isValid);
  }, [formData]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const msgPostRef = ref(db, `messages/${email.replace('@', '__').replace('.', '_')}}`);
    onValue(msgPostRef, () => {
      formRef.current.reset();
      notify('Ok, Thanks for You message :)');
    });

    return set(msgPostRef, {
      email,
      fullName,
      text
    });
  };

  return (
    <div className='container grid w-full place-content-center p-20'>
      <h2 className='m-auto text-2xl font-extrabold text-linkNormal'>Send me a message:</h2>
      <div className="w-full flex mt-10 ">
        <form ref={formRef} className="grid grid-cols-1 gap-6 items-center w-full min-w-[80%] xl:min-w-[1000px] m-3" >
          <label className="block" htmlFor='fullName' >
            <span className="text-linkSilver">Full name</span>
            <input type="text"
              name='fullName'
              onChange={onChange}
              required
              minLength={2}
              maxLength={60}
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-linkSilver
                    border-transparent
                    focus:border-linkHover focus:bg-white focus:ring-0
                    " placeholder="" />
          </label>
          <label className="block" htmlFor='email'>
            <span className="text-linkSilver">Email address</span>
            <input ref={emailRef}
              type="email"
              name='email'
              onChange={onChange}
              required
              minLength={4}
              maxLength={60}
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-linkSilver
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                    " placeholder="john@example.com" />
          </label>
          <label className="block" htmlFor='text' >
            <span className="text-linkSilver">Message</span>
            <textarea
              name='text'
              onChange={onChange}
              required
              minLength={4}
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-linkSilver
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                    "
              rows={7} />
          </label>
          <div className='sender w-full m-auto px-4 py-5'>
            <button type='button'
              disabled={!submitEnabled}
              onClick={onSubmit}
              className='
                max-w-xl 
                w-full 
                border-2 
                rounded-md 
                border-x-dark100 
                bg-linkNormal 
                p-4
                font-bold
                disabled:text-linkWhite
                disabled:opacity-50
                text-linkSecondary
                text-lg
              '>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;