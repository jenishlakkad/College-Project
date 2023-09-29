import { Breadcrumb } from "./Breadcrumb";
import { Layout } from "./Layout";

export const PublicLayout = ({
  children,
  breadcrumb,
  breadcrumbTitle,
  description,
}) => {
  return (
    <Layout>
      <Breadcrumb
        breadcrumb={breadcrumb}
        title={breadcrumbTitle}
        description={description}
      />
      <>{children}</>
    </Layout>
  );
};
export default PublicLayout;
