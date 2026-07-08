import UserIcon from './user-profile.png';

function Header({ token, email, onSetToken, onSetEmail }) {
    const handleLogout = () => {
        onSetToken('');
        onSetEmail('');
    };

    return (
        <header>
            <h1 className="page-title">Todo List</h1>
            {token && (
                <div className="user-info">
                    <img src={UserIcon} alt='User profile icon' width='48px' height='48px'/>
                    <p className="logged-in"> <span className="user">{email}</span></p>
                    <button className="logout-btn" onClick={handleLogout}>Logout 👋🏻</button>
                </div>
            )}
        </header>
    );
}

export default Header;