import PackageFooter from "~/component/packages/PackageFooter";
import PackagesHeader from "~/component/packages/PackageHeader";

const packages = () => {
  return (
    <div className=" flex flex-col gap-16">
      <PackagesHeader />
      <PackageFooter />
    </div>
  );
};

export default packages;
