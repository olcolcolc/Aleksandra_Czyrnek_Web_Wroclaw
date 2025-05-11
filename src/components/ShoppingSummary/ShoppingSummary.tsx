import "./ShoppingSummary.css";

type Props = {
  total: number;
  onConfirm?: () => void;
  confirmDisabled?: boolean;
  confirmLabel?: string;
};

const ShoppingSummary: React.FC<Props> = ({
  total,
  onConfirm,
  confirmDisabled = false,
  confirmLabel = "Złóż zamówienie",
}) => {
  return (
    <div className="shopping-summary">
      <p>Łącznie: {(total / 100).toFixed(2)} zł</p>
      {onConfirm && (
        <button onClick={onConfirm} disabled={confirmDisabled}>
          {confirmLabel}
        </button>
      )}
    </div>
  );
};

export default ShoppingSummary;
