import Image from 'next/image';
import logo from '../../public/img/logo.png';
import Form from 'next/form'
import { goToBeer } from '../server/actions';
 
const Home = async () => {
  return (
    <div className="home">
      <Image src={logo} alt="Logo" width={300} height={300} />
      {/* <Searchbox /> */}

      {/* On submit got to single beer */}
      <Form action={goToBeer}>
        <label htmlFor="symbol">Wprowadź symbol z kapsla:</label>
        <input name="symbol" />
        {/* <button type="submit">Submit</button> */}
      </Form>


      {/* On submission, the input value will be appended to the URL, e.g. /search?query=abc */}
      <Form action="/search">
        <label htmlFor="q">Lub wyszukaj:</label>
        <input name="q" />
        {/* <button type="submit">Submit</button> */}
      </Form>


     {/* add shortcuts below - link to all in stock, random beer (I am felling lucky), or any other */}
    </div>
  );
};

export default Home;
