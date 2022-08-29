import { toast, ToastContent } from 'react-toastify';
import _ from 'lodash';

const useToast = () => {
  const success = (msg: string, options = {}) => {
    return toast.success(msg, {
      // Merge additionals options
      ...options,
      className: 'rounded bg-success-500',
    });
  };

  const error = (msg: ToastContent, options = {}) => {
    return toast.error(msg, {
      ...options,
      className: 'rounded bg-error-500',
    });
  };
  const info = (msg: ToastContent, options = {}) => {
    return toast.info(msg, {
      ...options,
      className: 'rounded bg-black',
    });
  };

  const warn = (msg: ToastContent, options = {}) => {
    return toast.warn(msg, {
      ...options,
      className: 'rounded bg-warning-500',
    });
  };

  return {
    success,
    error,
    info,
    warn,
  };
};
export default useToast;
