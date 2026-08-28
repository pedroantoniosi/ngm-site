type Partner = {
  id: number;
  name: string;
  link: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const partners: Partner[] = [
  {
    id: 1,
    name: "ngm",
    link: "#",
  },
  {
    id: 2,
    name: "autonation",
    link: "https://www.autonation.com/",
  },
  {
    id: 3,
    name: "dhl",
    link: "https://www.dhl.com/br-pt/home.html",
  },
  {
    id: 4,
    name: "fanatec",
    link: "https://www.fanatec.com/us/en",
  },
  {
    id: 5,
    name: "firestone",
    link: "https://www.firestone.com/",
  },
  {
    id: 6,
    name: "ford",
    link: "https://www.ford.com.br/",
  },
  {
    id: 7,
    name: "hooters",
    link: "https://www.hooters.com/",
  },
  {
    id: 8,
    name: "motul",
    link: "https://www.motul.com/",
  },
  {
    id: 9,
    name: "netshoes",
    link: "https://www.netshoes.com.br/",
  },
  {
    id: 10,
    name: "okx",
    link: "https://www.okx.com/",
  },
  {
    id: 11,
    name: "pepsi",
    link: "https://www.pepsico.com.br/",
  },
  {
    id: 12,
    name: "pichau",
    link: "https://www.pichau.com.br/",
  },
];

export default function PartnerLogo() {
  return (
    <>
      {partners.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
          key={item.id}
        >
          <img
            src={`/img/partners/${item.name}.png`}
            alt={item.name}
            className="w-[200px] object-contain transition duration-300 hover:scale-105"
          />
        </a>
      ))}
    </>
  );
}
