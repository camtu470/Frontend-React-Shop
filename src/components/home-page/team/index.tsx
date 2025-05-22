const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Killed Master",
      role: "Blockchain Expert",
      image: "https://themedox.com/mykd/wp-content/uploads/2023/10/team01.png",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Frontend Developer",
      image: "https://themedox.com/mykd/wp-content/uploads/2023/10/team02.png",
    },
    {
      id: 3,
      name: "John Smith",
      role: "UI/UX Designer",
      image: "https://themedox.com/mykd/wp-content/uploads/2023/10/team03.png",
    },
    {
      id: 4,
      name: "Emily Clark",
      role: "Project Manager",
      image: "https://themedox.com/mykd/wp-content/uploads/2023/10/team04.png",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-[#45f882] text-center tracking-[.25em]">
          OUR TEAM MEMBER
        </p>
        <h1 className="text-4xl font-extrabold text-center">
          ACTIVE TEAM MEMBERS
        </h1>
      </div>

      <div className="w-2/12 mx-auto border-2 border-green-500"></div>

      <div className="flex gap-4 px-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="w-1/4 flex flex-col bg-[#1c242f] rounded-lg hover:-translate-y-2 transition-transform duration-500 group"
          >
            <div className="relative h-[300px] overflow-hidden">
              <div className="absolute opacity-[0.5] group-hover:opacity-[1] transition-all duration-300 ease-in-out border-t pt-1 border-[#45f882] origin-top-right rotate-[30deg] left-[-40px] top-[120px]">
                <div className="bg-[#45f882] p-8 w-[200px]"></div>
              </div>

              <div className="absolute opacity-[0.5] group-hover:opacity-[1] transition-all duration-300 ease-in-out border-t pt-1 border-green-600 origin-top-left rotate-[-30deg] right-[-40px] top-[120px]">
                <div className="bg-[#45f882] p-8 w-[200px]"></div>
              </div>

              <div className="absolute w-9/12 top-[40px] left-[40px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="border-4 border-white object-center rounded-full w-[200px] h-[200px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 px-10 pb-6 text-center">
              <h1 className="uppercase text-2xl text-white">{member.name}</h1>
              <p className="capitalize font-bold text-[#45f882]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
