import ErrorImage from "../assets/narrative_logo_large.svg";

export default function NewsCard({ details }: NewsProp) {
  function CheckImageType(url: string): boolean {
    if (url != null) {
      return true;
    } else {
      console.log(url);
      return false;
    }
  }

  return (
    <div className="w-[30%] rounded-lg pb-4 border-2 border-[#434656]">
      <div className="flex justify-center">
        {CheckImageType(details.urlToImage) ? (
          <img
            className="w-full"
            src={details.urlToImage}
            loading="lazy"
            alt={details.title}
          />
        ) : (
          <img className="w-1/2" src={ErrorImage} alt="" />
        )}
      </div>
      <div className="px-4 flex flex-col justify-between flex-grow">
        <h2 className="text-2xl font-serif font-bold">{details.title}</h2>
        <p className=" font-mono">Source: {details.source.name}</p>
      </div>
    </div>
  );
}
