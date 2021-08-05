import tail from "../images/tail.png"

const ButtonCard = () => {
  return ( 
    <div class="py-10 px-8 max-w-max mx-auto bg-white rounded-xl shadow-md space-y-4 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-72 rounded-full sm:mx-0 sm:flex-shrink-0" src={tail} alt="Bri and Becki with tails"></img>
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-2xl text-red-600 font-semibold">
        New things to learn! 
      </p>
      <p class="text-xl pt-2 pb-2 text-red-600 font-semibold font-medium">
        Fun times
      </p>
    </div>
    <button class="m-4 py-2 px-4 text-lg text-red-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">White Button</button>
    <button class="btn btn-red">
  Red Button
</button>
  </div>
</div>
   );
  }
   
  export default ButtonCard;
 
