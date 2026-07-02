type Partner = {
  name: string;
  link: string;
};

type PartnerLogoProps = {
  partner: Partner;
};

// eslint-disable-next-line react-refresh/only-export-components
export const partners: Partner[] = [
  {
    name: "autonation",
    link: "https://www.autonation.com/",
  },
  {
    name: "dhl",
    link: "https://www.dhl.com/br-pt/home.html",
  },
  {
    name: "fanatec",
    link: "https://www.fanatec.com/us/en",
  },
  {
    name: "firestone",
    link: "https://www.fanatec.com/us/en",
  },
  {
    name: "ford",
    link: "https://www.ford.com.br/",
  },
  {
    name: "hooters",
    link: "https://www.hooters.com/",
  },
  {
    name: "motul",
    link: "https://www.motul.com/",
  },
  {
    name: "netshoes",
    link: "https://www.netshoes.com.br/",
  },
  {
    name: "okx",
    link: "https://www.okx.com/",
  },
  {
    name: "Pepsi",
    link: "https://www.pepsico.com.br/",
  },
  {
    name: "pichau",
    link: "https://www.pichau.com.br/",
  },
];

export default function PartnerLogo({ partner }: PartnerLogoProps) {
  return (
    <a
      href={partner.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center"
    >
      <img
        src={`/img/partners/${partner.name}.png`}
        alt={partner.name}
        className="w-[200px] object-contain transition duration-300 hover:scale-105"
      />
    </a>
  );
}
