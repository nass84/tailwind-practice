import Box from "./box";

const Flex = () => {
  return (
    <div className="flex-boxes m-20">
      
        <h1 className="h1-flex ml-4"> flex-row </h1>
        <div className="flex flex-row">
        <Box text="1"/>
        <Box text="2"/>
        <Box text="3"/>
        <Box text="4"/>
      </div>
      <h1 className="h1-flex flex flex-row-reverse mr-4"> flex-row-reverse </h1>
        <div className="flex flex-row-reverse">
        <Box text="1"/>
        <Box text="2"/>
        <Box text="3"/>
        <Box text="4"/>
      </div>
      <div className="col-title mt-10 flex flex-row">
      <h1 className="h1-flex ml-14"> flex-col </h1>
      <h1 className="h1-flex ml-8"> flex-col-reverse </h1>
      </div>
      <div className="mt-10 flex flex-row">
      
        <div className="flex flex-col mr-10 ml-12">
        <Box text="1"/>
        <Box text="2"/>
        <Box text="3"/>
        <Box text="4"/>
      </div>
      
        <div className="flex flex-col-reverse">
        <Box text="1"/>
        <Box text="2"/>
        <Box text="3"/>
        <Box text="4"/>
      </div>
   </div>
  </div>
    );
}
 
export default Flex;