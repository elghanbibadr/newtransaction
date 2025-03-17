import { Button } from "antd-mobile";
interface BottomNavigationBarProps {
  currentStep: number;
  onSubmit: () => void;
  onBack: () => void;
}

const BottomNavigationBar = ({
  currentStep,
  onSubmit,
  onBack,
}: BottomNavigationBarProps) => {
  // Function to get the bottom action props
  const getBottomActionProps = () => {
    switch (currentStep) {
      case 0:
        return {
          primaryLabel: "Next",
          onPrimary: onSubmit,
        };
      case 1:
        return {
          primaryLabel: "Next",
          onPrimary: onSubmit,
          secondaryLabel: "Back",
          onSecondary: onBack,
        };
      case 2:
        return {
          primaryLabel: "Next",
          onPrimary: onSubmit,
          secondaryLabel: "Back",
          onSecondary: onBack,
        };
        case 3:
            return {};
      default:
        return {
          primaryLabel: "Next",
          onPrimary: onSubmit,
        };
    }
  };

  // Get the button props based on the current step
  const { primaryLabel, onPrimary, secondaryLabel, onSecondary } =
    getBottomActionProps();
  return (
    <div className="bottom-actions">
    { primaryLabel &&  <Button
        block
        color="primary"
        size="large"
        onClick={onPrimary}
        className="action-button"
      >
        {primaryLabel}
      </Button>}

      {secondaryLabel && (
        <Button
          block
          color="default"
          size="large"
          onClick={onSecondary}
          className="action-button"
        >
          {secondaryLabel}
        </Button>
      )}
    </div>
  );
};

export default BottomNavigationBar;
