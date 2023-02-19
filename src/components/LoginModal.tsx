import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import "firebase/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FIREBASE_ERROR } from "../firebase/errors";
import { Fragment } from "react";

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

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel className="flex min-h-screen flex-col items-center justify-center ">
          <div className="rounded-3xl bg-gradient-to-b from-teal-400 to-teal-600 p-5 shadow-md">
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
