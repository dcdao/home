// eslint-disable-next-line react/prop-types
export default function Header({ setIndex }) {
  return (
    <div className="flex items-center justify-center absolute top-0 right-0 left-0 m-auto w-[50vw] h-[6vw] gap-[3vw] z-20 bg-[#f3f3f3]">
      <p
        className="text-[1.2vw] font-bold  text-black cursor-pointer after:block after:content-[''] after:bg-black after:w-full after:h-[2px] after:scale-x-0 hover:after:scale-x-[1] after:duration-300"
        onClick={() => {
          setIndex(0);
        }}
      >
        Home
      </p>
      <p
        className="text-[1.2vw] font-bold  text-black cursor-pointer after:block after:content-[''] after:bg-black after:w-full after:h-[2px] after:scale-x-0 hover:after:scale-x-[1] after:duration-300"
        onClick={() => {
          setIndex(1);
        }}
      >
        Join
      </p>
      <p
        className="text-[1.2vw] font-bold  text-black cursor-pointer after:block after:content-[''] after:bg-black after:w-full after:h-[2px] after:scale-x-0 hover:after:scale-x-[1] after:duration-300"
        onClick={() => {
          setIndex(2);
        }}
      >
        Contact
      </p>
    </div>
  );
}
