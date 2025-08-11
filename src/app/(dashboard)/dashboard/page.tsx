import React from "react";

interface Props {
    className?: string;
}

const Dashboard: React.FC<Props> = ({ className }) => {
    return <div className={className}>Dashboard</div>;
};

export default Dashboard;
