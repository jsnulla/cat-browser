import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { apiErrorCleared } from '../../state/actions';

const Notification = () => {
  const appErrorMessage = useSelector((state: App.State) => state.error);
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(apiErrorCleared());
  };

  return (
    <div aria-live="polite" aria-atomic="true" className="position-relative">
      <ToastContainer position="top-end">
        <Toast
          className="d-inline-block m-1"
          bg="danger"
          show={appErrorMessage !== ''}
          onClose={handleCloseClick}
        >
          <Toast.Header>
            <strong className="me-auto">Oh no! 🙀</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Apologies but we could not load new cats for you at this time! Miau!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Notification;
