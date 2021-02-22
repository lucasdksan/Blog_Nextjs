import { Container } from '../styles/index';
import Header from '../components/Header/index';
import Main from '../components/Main/index';
import Footer from '../components/Footer/index';

function Home(){
    return(
        <Container>
            <Header/>
            <Main/>
            <Footer/>
        </Container>
    );
};

export default Home;