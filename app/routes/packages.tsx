import PackagesHeader from "~/component/packages/packageHeader";
import PackageFooter from "~/component/packages/PackageFooter";

const packages = () => {
  return (
    <div className=" flex flex-col gap-16">
      <PackagesHeader />
      <PackageFooter />
    </div>
  );
};

export default packages;
