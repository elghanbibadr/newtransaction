import { Result } from "antd-mobile";
import { CheckCircleOutline } from "antd-mobile-icons";

export const TransactionCompleted = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Result
        icon={<CheckCircleOutline style={{ color: "#1c8f33" }} />}
        title="Transaction Completed"
        description="Your transaction has been successfully completed. You can now view your details or perform other actions."
      
      />
    </div>
  );
};
