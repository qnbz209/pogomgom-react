import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            안녕하세요!
            <div>
                <Link to="/signup">
                    회원가입하실래요?
                    </Link>
            </div>
        </div>
    );
}

export default Home;