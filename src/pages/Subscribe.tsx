import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { LogoBravo } from "../components/LogoBravo";


export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      }
    })
    navigate('/subscribed')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center justify-between">
      <div className="w-full max-w-[68.75rem] flex items-start justify-between mt-20 mx-auto">
        <div className="max-w-[40rem] my-auto">
          <LogoBravo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            It's a <strong className="text-orange-500">LIVE</strong> style!<br />
            Because <strong className="text-orange-500">LIVE</strong> is so much better!
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Welcome to your LIVE style! <br />
            Don't forget to share your love with us! Subscribe and enjoy all the Bravo content.
          </p>
        </div>
        <div className="p-8 bg-darkBlue-500 border border-pink-500 rounded">
          <strong className="text-2xl mb-6 block">SIGN UP FOR EXCLUSIVES</strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14 outline-none"
              type="text"
              placeholder="Enter your name"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 outline-none"
              type="email"
              placeholder="Enter your e-mail address"
              onChange={event => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 text-green-500 border border-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-500 hover:text-gray-700 transition-colors disabled:opacity-50"
            >
              Subscribe Bravo
            </button>
          </form>
        </div>
      </div>
      <div className="bg-darkBlue-500 bg-opacity-6  0 w-full">
        <Footer />
      </div>
    </div>
  );
}