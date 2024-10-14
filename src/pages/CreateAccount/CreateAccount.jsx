import { Helmet } from "react-helmet";
import CreateAccountImage from "./CreateAccountImage";
import CreateAccountItem from "./CreateAccountItem";

export default function CreateAccount() {
  return (
    <main className="mb-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <CreateAccountImage />
        <CreateAccountItem />
      </section>
      <Helmet>
        <title>Create Account</title>
      </Helmet>
    </main>
  );
}
