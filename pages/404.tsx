import Image from "next/image";

const renderHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/images/cooldoge.png"
        layout="intrinsic"
        width="160px"
        height="160px"
      />
      <div className="mb-4" />
      <h1 className="text-xlarge text-center">Le 404</h1>
    </div>
  );
};

const Four = () => {
  const render = () => {
    return (
      <div className="dark">
        <div className="flex flex-col w-screen h-screen items-center  justify-center">
          {renderHeader()}
        </div>
      </div>
    );
  };

  return render();
};

export default Four;
