import Footer from './footer/footer';
import Header from './header/header';
import './layout.scss';
// import Sidebar from './sidebar/sidebar';

const AdminLayout = (props: { [x: string]: any; component: any; }) => {

  const { component: Component, ...rest } = props;
  return (
    <>
      <div className="main">
        {/* <Sidebar {...rest} /> */}
        <main className="main-container">
          <Header {...rest} />
          <div className="body-container">
            <Component {...rest} />
          </div>
          <Footer />
        </main>
      </div>
    </>

  );
};

export default AdminLayout;