import '../assets/css/MainContainer.css';

export default function Tasks ({ children }) { 
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}