import React from "react";
import headerStyles from "../../themes/componentStyles/header.module.scss";
interface PageHeaderProps {
  title: string;
}
const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { title } = props;
  return <p className={headerStyles?.heading}>{title}</p>;
};

export default PageHeader;
