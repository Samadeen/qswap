/* eslint-disable react/prop-types */

import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

export default function NavFootLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
