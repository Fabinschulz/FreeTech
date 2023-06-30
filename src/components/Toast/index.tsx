import { useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface ToastProps {
    message: string;
    type: string;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 6000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            role="alert"
            className={`flex justify-items-start items-end text-white font-bold fixed bottom-0 px-4 py-3 rounded m-6 transition-opacity duration-500 ${
                type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
        >
            <div className="mr-4">
                {type === 'success' ? (
                    <FaCheck className="text-2xl" />
                ) : (
                    <FaTimes className="text-2xl" />
                )}
            </div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-sm">{message}</p>

                <button
                    type="button"
                    className="opacity-50 hover:opacity-100 transition-opacity duration-500 ml-3"
                    onClick={onClose}
                >
                    <FaTimes className="text-sm" />
                </button>
            </div>
        </div>
    );
};

export default Toast;
