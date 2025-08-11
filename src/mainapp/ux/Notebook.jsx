
import '../ui/Notebook.css';
export const Notebook = ({ children }) => {
  return (
    <div className="profile-box">
      <div className="spirals">
        <span className="spiral"></span>
        <span className="spiral"></span>
        <span className="spiral"></span>
        <span className="spiral"></span>
        <span className="spiral"></span>
        <span className="spiral"></span>
      </div>
      <div className="profile-content">
        {children}
      </div>
    </div>
  );
};
