import Link from "next/link";
import Image from "next/image";

type Props = {
  meal: {
    id: string;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
  };
};

const MealItem = ({ meal }: Props) => {
  return (
    <article
      className={
        "flex flex-col justify-start rounded-md shadow-md overflow-hidden transition bg-gradient-to-tl from-blue-800 to-indigo-900  max-w-[14rem] h-full"
      }
    >
      <header>
        <div className="relative h-32 md:h-48">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="px-4 mt-4 font-extrabold tracking-wider">
          <h2>{meal.title}</h2>
          <p className="italic text-sm text-slate-300 font-serif">
            by {meal.creator}
          </p>
        </div>
      </header>
      <div className={"flex flex-col justify-between h-full text-slate-200"}>
        <p className={"px-4 pt-4 line-clamp-3"}>{meal.summary}</p>
        <div className={"p-4 text-center md:text-right"}>
          <Link
            href={`/meals/${meal.slug}`}
            className="text-white inline-block mt-4 px-2 py-1 rounded-md bg-red-700  hover:bg-red-900 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
