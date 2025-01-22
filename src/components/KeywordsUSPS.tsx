import Dot from "./Dot";
import KeywordsList from "./KeywordsList";

function KeywordsUSPS() {
  return (
    <div
      id="usp"
      className="flex justify-left items-center font-tt_lakes uppercase absolute ml-[25vw] lg:ml-[50vw] lg:top-[calc(6.2499vw_-_10px)] top-[calc(7.2915vw_-_10px)] 2xl:top-[calc(4.68743vw-10px)]  -translate-y-1/2 text-xs font-medium"
    >
      <span className="text-[1em]">We</span>

      <Dot />

      <KeywordsList />
    </div>
  );
}

export default KeywordsUSPS;
