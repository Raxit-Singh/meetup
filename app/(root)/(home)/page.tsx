import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
  }).format(now);

  return (
    <section className="flex flex-col text-white size-full gap-10">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 max-lg:p-11 lg:p-11">
          <h2 className="bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 max-w-[270px] rounded py-2 text-center text-base font-normal"></h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl uppercase">
              {time}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
