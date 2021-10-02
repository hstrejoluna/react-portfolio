import ReactDOM from "react-dom";

const Modal = ({ show, title, children, close }) => {
  return ReactDOM.createPortal(
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <section className="modal_header">
              <h2 className="modal_header-title">{title}</h2>
              <button
                className="close fa fa-times-circle"
                onClick={() => close()}
              />
            </section>
            <section className="modal_content">{children}</section>
            <footer className="modal_footer">
              <button className="modal-close" onClick={() => close()}>
                Amazing!
              </button>
            </footer>
          </div>
        </div>
      ) : null}
      ,
    </>,
    document.getElementById("modal")
  );
};
export default Modal;
