import Image from 'next/image';
import Link from 'next/link';
import Form from 'next/form'
import logo from '../../public/img/logo.png';
import { goToBeer } from '../server/actions';
import '@/style/home.css';
 
const Home = async () => {
  return (
    <div id="home">
      <Image src={logo} alt="Logo" width={260} height={260} />
      <h1>Piwny katalog</h1>

      <main>
        {/* On symbol submit got to single beer */}
        <Form action={goToBeer} className="formSingle">
          <label htmlFor="symbol">Wprowadź symbol z kapsla:</label>
          <input
            name="symbol"
            maxLength={4}
          />
        </Form>

        {/* On submit, go to filtered results page*/}
        <Form action="/list" className="formSearch">
          <label htmlFor="q">Lub wyszukaj:</label>
          <input
            name="q"
            minLength={2}
            placeholder="Nazwa, styl, symbol"
          />
        </Form>
        <Link className="linkToAll" href="/list">Przejdź do listy wszystkich piw</Link>
      </main>

     {/* add shortcuts below - link to all in stock, random beer (I am felling lucky), or any other */}
    </div>
  );
};

export default Home;
