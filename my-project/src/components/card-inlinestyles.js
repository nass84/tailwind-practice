import tail2 from "../images/tail2.png";

const InlineCard = () => {
  return ( 
    <div className="m-10 p-10 max-w-max mx-auto bg-red-500 rounded-xl shadow-md flex items-center space-x-8">
  <div className="flex-shrink-0">
    <img className="h-80 w-80" src={tail2} alt="Becki and Bri with tails"></img>
  </div>
  <div>
    <div className="text-4xl font-medium text-white">Tailwind is Working!</div>
    <p className="pt-4 text-xl text-white-500 text-white">Looks pretty awesome</p>
  </div>
</div>

   );
}
 
export default InlineCard;