import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { useState } from "react";
import { auth } from "../../firebase/firebase";
import "firebase/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FIREBASE_ERROR } from "../../firebase/errors";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ isOpen, setIsOpen }: ModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    void signInWithEmailAndPassword(email, password);
  };
  if (user) {
    setIsOpen(false);
  }

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel className="flex min-h-screen flex-col items-center justify-center ">
          <div className="rounded-3xl bg-white bg-gradient-to-b p-5 shadow-md">
            <div className="flex w-full justify-end ">
              <button
                className="btn-sm btn-circle shadow-sm hover:bg-slate-100"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="mb-5 flex w-full items-center justify-center">
              <h1 className="text-center">Log In</h1>
            </div>
            <div className="border-t border-slate-200"></div>
            <form onSubmit={onSubmit} className="mx-auto my-8 w-96 ">
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="mb-2 block text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>
              <h1 className="font-bold text-red-500">
                {FIREBASE_ERROR[error?.message as keyof typeof FIREBASE_ERROR]}
              </h1>
              <div className="flex w-full items-center justify-center ">
                <button
                  type="submit"
                  className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}
